import { j as set_current_component, r as run_all, k as current_component, c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, f as spread, h as escape_object, d as each, i as escape_attribute_value } from "../../../chunks/ssr.js";
import "dequal";
import { t as toWritableStores, o as omit, a as overridable, m as makeElement, c as createElHelpers, d as disabledAttr, e as executeCallbacks, b as addMeltEventListener, s as styleToString, f as isHTMLElement, k as kbd, h as getElementByMeltId } from "../../../chunks/create.js";
import { nanoid } from "nanoid/non-secure";
import { d as derived, w as writable } from "../../../chunks/index.js";
import { renderRichText } from "@storyblok/js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function generateId() {
  return nanoid(10);
}
function generateIds(args) {
  return args.reduce((acc, curr) => {
    acc[curr] = generateId();
    return acc;
  }, {});
}
const { name, selector } = createElHelpers("accordion");
const defaults = {
  multiple: false,
  disabled: false,
  forceVisible: false
};
const createAccordion = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value", "onValueChange", "defaultValue"));
  const meltIds = generateIds(["root"]);
  const { disabled, forceVisible } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const isSelected = (key, v) => {
    if (v === void 0)
      return false;
    if (typeof v === "string")
      return v === key;
    return v.includes(key);
  };
  const isSelectedStore = derived(value, ($value) => {
    return (key) => isSelected(key, $value);
  });
  const root = makeElement(name(), {
    returned: () => ({
      "data-melt-id": meltIds.root
    })
  });
  const parseItemProps = (props2) => {
    if (typeof props2 === "string") {
      return { value: props2 };
    } else {
      return props2;
    }
  };
  const parseHeadingProps = (props2) => {
    if (typeof props2 === "number") {
      return { level: props2 };
    } else {
      return props2;
    }
  };
  const item = makeElement(name("item"), {
    stores: value,
    returned: ($value) => {
      return (props2) => {
        const { value: itemValue, disabled: disabled2 } = parseItemProps(props2);
        return {
          "data-state": isSelected(itemValue, $value) ? "open" : "closed",
          "data-disabled": disabledAttr(disabled2)
        };
      };
    }
  });
  const trigger = makeElement(name("trigger"), {
    stores: [value, disabled],
    returned: ([$value, $disabled]) => {
      return (props2) => {
        const { value: itemValue, disabled: disabled2 } = parseItemProps(props2);
        return {
          disabled: disabledAttr($disabled || disabled2),
          "aria-expanded": isSelected(itemValue, $value) ? true : false,
          "aria-disabled": disabled2 ? true : false,
          "data-disabled": disabledAttr(disabled2),
          "data-value": itemValue,
          "data-state": isSelected(itemValue, $value) ? "open" : "closed"
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        const disabled2 = node.dataset.disabled === "true";
        const itemValue = node.dataset.value;
        if (disabled2 || !itemValue)
          return;
        handleValueUpdate(itemValue);
      }), addMeltEventListener(node, "keydown", (e) => {
        if (![kbd.ARROW_DOWN, kbd.ARROW_UP, kbd.HOME, kbd.END].includes(e.key)) {
          return;
        }
        e.preventDefault();
        if (e.key === kbd.SPACE || e.key === kbd.ENTER) {
          const disabled2 = node.dataset.disabled === "true";
          const itemValue = node.dataset.value;
          if (disabled2 || !itemValue)
            return;
          handleValueUpdate(itemValue);
          return;
        }
        const el = e.target;
        const rootEl = getElementByMeltId(meltIds.root);
        if (!rootEl || !isHTMLElement(el))
          return;
        const items = Array.from(rootEl.querySelectorAll(selector("trigger")));
        const candidateItems = items.filter((item2) => {
          if (!isHTMLElement(item2))
            return false;
          return item2.dataset.disabled !== "true";
        });
        if (!candidateItems.length)
          return;
        const elIdx = candidateItems.indexOf(el);
        if (e.key === kbd.ARROW_DOWN) {
          candidateItems[(elIdx + 1) % candidateItems.length].focus();
        }
        if (e.key === kbd.ARROW_UP) {
          candidateItems[(elIdx - 1 + candidateItems.length) % candidateItems.length].focus();
        }
        if (e.key === kbd.HOME) {
          candidateItems[0].focus();
        }
        if (e.key === kbd.END) {
          candidateItems[candidateItems.length - 1].focus();
        }
      }));
      return {
        destroy: unsub
      };
    }
  });
  const content = makeElement(name("content"), {
    stores: [value, disabled, forceVisible],
    returned: ([$value, $disabled, $forceVisible]) => {
      return (props2) => {
        const { value: itemValue } = parseItemProps(props2);
        const selected = isSelected(itemValue, $value);
        const isVisible = selected || $forceVisible;
        return {
          "data-state": selected ? "open" : "closed",
          "data-disabled": disabledAttr($disabled),
          "data-value": itemValue,
          hidden: isVisible ? void 0 : true,
          style: isVisible ? void 0 : styleToString({ display: "none" })
        };
      };
    },
    action: (node) => {
      tick().then(() => {
        const contentId = generateId();
        const triggerId = generateId();
        const parentTrigger = document.querySelector(`${selector("trigger")}, [data-value="${node.dataset.value}"]`);
        if (!isHTMLElement(parentTrigger))
          return;
        node.id = contentId;
        parentTrigger.setAttribute("aria-controls", contentId);
        parentTrigger.id = triggerId;
      });
    }
  });
  const heading = makeElement(name("heading"), {
    returned: () => {
      return (props2) => {
        const { level } = parseHeadingProps(props2);
        return {
          role: "heading",
          "aria-level": level,
          "data-heading-level": level
        };
      };
    }
  });
  function handleValueUpdate(itemValue) {
    value.update(($value) => {
      if ($value === void 0) {
        return withDefaults.multiple ? [itemValue] : itemValue;
      }
      if (Array.isArray($value)) {
        if ($value.includes(itemValue)) {
          return $value.filter((v) => v !== itemValue);
        }
        $value.push(itemValue);
        return $value;
      }
      return $value === itemValue ? void 0 : itemValue;
    });
  }
  return {
    ids: meltIds,
    elements: {
      root,
      item,
      trigger,
      content,
      heading
    },
    states: {
      value
    },
    helpers: {
      isSelected: isSelectedStore
    },
    options
  };
};
function createSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $root, $$unsubscribe_root;
  let $content, $$unsubscribe_content;
  let $trigger, $$unsubscribe_trigger;
  let $item, $$unsubscribe_item;
  let $isSelected, $$unsubscribe_isSelected;
  const { elements: { content, item, trigger, root }, helpers: { isSelected } } = createAccordion();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_item = subscribe(item, (value) => $item = value);
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  $$unsubscribe_isSelected = subscribe(isSelected, (value) => $isSelected = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_root();
  $$unsubscribe_content();
  $$unsubscribe_trigger();
  $$unsubscribe_item();
  $$unsubscribe_isSelected();
  return `<figure class="image is-2by1 block"><img${add_attribute("src", `${data.story?.content.image?.filename}/m/1104x552/smart`, 0)}${add_attribute("alt", data.story?.content.image?.alt, 0)}></figure> <section class="section content"><h1 class="title is-1">${escape(data.story?.content.title)}</h1> <!-- HTML_TAG_START -->${renderRichText(data.story?.content.description)}<!-- HTML_TAG_END --></section> <hr> <section class="section content"><div${spread([escape_object($root)], {})}>${each(data.story?.content.sections ?? [], (section, i) => {
    let id = { value: section._uid }, __MELTUI_BUILDER_2__ = $content(id), __MELTUI_BUILDER_1__ = $trigger(id), __MELTUI_BUILDER_0__ = $item(id);
    return `    <div${spread(
      [
        {
          id: escape_attribute_value(createSlug(section.title))
        },
        { class: "block" },
        escape_object(__MELTUI_BUILDER_0__)
      ],
      {}
    )}><div class="card"><header${spread(
      [
        {
          class: "card-header has-background-primary"
        },
        escape_object(__MELTUI_BUILDER_1__)
      ],
      {}
    )}><p class="card-header-title has-text-white">${escape(section.title)} </p></header> ${$isSelected(section._uid) ? `<div${spread([escape_object(__MELTUI_BUILDER_2__)], {})}><div class="card-content"><div class="content"><!-- HTML_TAG_START -->${renderRichText(section.content)}<!-- HTML_TAG_END --> </div></div> </div>` : ``}</div> </div>`;
  })}</div></section>`;
});
export {
  Page as default
};
