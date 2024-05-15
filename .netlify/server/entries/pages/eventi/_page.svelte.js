import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, f as spread, h as escape_object, d as each, i as escape_attribute_value } from "../../../chunks/ssr.js";
import "dequal";
import { t as toWritableStores, o as omit, a as overridable, m as makeElement, c as createElHelpers, d as disabledAttr, e as executeCallbacks, b as addMeltEventListener, i as isBrowser, f as isHTMLElement, g as getDirectionalKeys, k as kbd } from "../../../chunks/create.js";
import { w as writable } from "../../../chunks/index.js";
import { renderRichText } from "@storyblok/js";
function next(array, index, loop = true) {
  if (index === array.length - 1) {
    return loop ? array[0] : array[index];
  }
  return array[index + 1];
}
function prev(array, currentIndex, loop = true) {
  if (currentIndex <= 0) {
    return loop ? array[array.length - 1] : array[0];
  }
  return array[currentIndex - 1];
}
function last(array) {
  return array[array.length - 1];
}
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
const defaults = {
  orientation: "horizontal",
  activateOnFocus: true,
  loop: true,
  autoSet: true
};
const { name, selector } = createElHelpers("tabs");
function createTabs(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "defaultValue", "value", "onValueChange", "autoSet"));
  const { orientation, activateOnFocus, loop } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  let ssrValue = withDefaults.defaultValue ?? value.get();
  const root = makeElement(name(), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        "data-orientation": $orientation
      };
    }
  });
  const list = makeElement(name("list"), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        role: "tablist",
        "aria-orientation": $orientation,
        "data-orientation": $orientation
      };
    }
  });
  const parseTriggerProps = (props2) => {
    if (typeof props2 === "string") {
      return { value: props2 };
    } else {
      return props2;
    }
  };
  const trigger = makeElement(name("trigger"), {
    stores: [value, orientation],
    returned: ([$value, $orientation]) => {
      return (props2) => {
        const { value: tabValue, disabled } = parseTriggerProps(props2);
        if (!$value && !ssrValue && withDefaults.autoSet) {
          ssrValue = tabValue;
          $value = tabValue;
          value.set(tabValue);
        }
        const sourceOfTruth = isBrowser ? $value : ssrValue;
        const isActive = sourceOfTruth === tabValue;
        return {
          type: "button",
          role: "tab",
          "data-state": isActive ? "active" : "inactive",
          tabindex: isActive ? 0 : -1,
          "data-value": tabValue,
          "data-orientation": $orientation,
          "data-disabled": disabledAttr(disabled),
          disabled: disabledAttr(disabled)
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "focus", () => {
        const disabled = node.dataset.disabled === "true";
        const tabValue = node.dataset.value;
        if (activateOnFocus.get() && !disabled && tabValue !== void 0) {
          value.set(tabValue);
        }
      }), addMeltEventListener(node, "click", (e) => {
        node.focus();
        e.preventDefault();
        const disabled = node.dataset.disabled === "true";
        if (disabled)
          return;
        const tabValue = node.dataset.value;
        node.focus();
        if (tabValue !== void 0) {
          value.set(tabValue);
        }
      }), addMeltEventListener(node, "keydown", (e) => {
        const tabValue = node.dataset.value;
        if (!tabValue)
          return;
        const el = e.currentTarget;
        if (!isHTMLElement(el))
          return;
        const rootEl = el.closest(selector());
        if (!isHTMLElement(rootEl))
          return;
        const $loop = loop.get();
        const triggers = Array.from(rootEl.querySelectorAll('[role="tab"]')).filter((trigger2) => isHTMLElement(trigger2));
        const enabledTriggers = triggers.filter((el2) => !el2.hasAttribute("data-disabled"));
        const triggerIdx = enabledTriggers.findIndex((el2) => el2 === e.target);
        const dir = getElemDirection(rootEl);
        const { nextKey, prevKey } = getDirectionalKeys(dir, orientation.get());
        if (e.key === nextKey) {
          e.preventDefault();
          const nextEl = next(enabledTriggers, triggerIdx, $loop);
          nextEl.focus();
        } else if (e.key === prevKey) {
          e.preventDefault();
          const prevEl = prev(enabledTriggers, triggerIdx, $loop);
          prevEl.focus();
        } else if (e.key === kbd.ENTER || e.key === kbd.SPACE) {
          e.preventDefault();
          value.set(tabValue);
        } else if (e.key === kbd.HOME) {
          e.preventDefault();
          const firstTrigger = enabledTriggers[0];
          firstTrigger.focus();
        } else if (e.key === kbd.END) {
          e.preventDefault();
          const lastTrigger = last(enabledTriggers);
          lastTrigger.focus();
        }
      }));
      return {
        destroy: unsub
      };
    }
  });
  const content = makeElement(name("content"), {
    stores: value,
    returned: ($value) => {
      return (tabValue) => {
        return {
          role: "tabpanel",
          // TODO: improve
          "aria-labelledby": tabValue,
          hidden: isBrowser ? $value === tabValue ? void 0 : true : ssrValue === tabValue ? void 0 : true,
          tabindex: 0
        };
      };
    }
  });
  return {
    elements: {
      root,
      list,
      trigger,
      content
    },
    states: {
      value
    },
    options
  };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let __MELTUI_BUILDER_1__;
  let __MELTUI_BUILDER_2__;
  let $content, $$unsubscribe_content;
  let $root, $$unsubscribe_root;
  let $list, $$unsubscribe_list;
  let $trigger, $$unsubscribe_trigger;
  let $value, $$unsubscribe_value;
  const { elements: { root, list, content, trigger }, states: { value } } = createTabs({ defaultValue: "incoming" });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  $$unsubscribe_list = subscribe(list, (value2) => $list = value2);
  $$unsubscribe_content = subscribe(content, (value2) => $content = value2);
  $$unsubscribe_trigger = subscribe(trigger, (value2) => $trigger = value2);
  $$unsubscribe_value = subscribe(value, (value2) => $value = value2);
  const triggers = [{ id: "incoming", title: "In arrivo" }, { id: "passed", title: "Passati" }];
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  __MELTUI_BUILDER_1__ = $content("incoming");
  __MELTUI_BUILDER_2__ = $content("passed");
  $$unsubscribe_content();
  $$unsubscribe_root();
  $$unsubscribe_list();
  $$unsubscribe_trigger();
  $$unsubscribe_value();
  return `<figure class="image is-2by1 block"><img${add_attribute("src", `${data.events?.content.image?.filename}/m/1104x552/smart`, 0)}${add_attribute("alt", data.events?.content.image?.alt, 0)}></figure> <section class="section content"><h1 class="title is-1">${escape(data.events?.content.title)}</h1> <!-- HTML_TAG_START -->${renderRichText(data.events?.content.description)}<!-- HTML_TAG_END --></section> <div${spread([escape_object($root)], {})}><div${spread(
    [
      escape_object($list),
      { "aria-label": "Eventi Confronti" },
      { class: "tabs is-centered" }
    ],
    {}
  )}><ul>${each(triggers, (triggerItem) => {
    let __MELTUI_BUILDER_0__ = $trigger(triggerItem.id);
    return ` <li${spread(
      [
        escape_object(__MELTUI_BUILDER_0__),
        {
          class: escape_attribute_value($value === triggerItem.id ? "is-active" : "")
        }
      ],
      {}
    )}><a>${escape(triggerItem.title)}</a> ${$value === triggerItem.id ? `<div></div>` : ``} </li>`;
  })}</ul></div> <div${spread([escape_object(__MELTUI_BUILDER_1__)], {})}><div class="columns is-multiline">${each(data.stories?.incoming ?? [], (story) => {
    return `<div class="column is-half"><div class="card"><div class="card-image"><figure class="image is-3by2"><img${add_attribute("src", story.content.image?.filename, 0)}${add_attribute("alt", story.content.image?.filename, 0)}> </figure></div> <div class="card-content"><div class="content"><h2 class="title is-4">${escape(story.content.title)}</h2> <p class="subtitle is-5">${escape(story.content.date)}</p> <p class="subtitle is-5">${escape(story.content.place)}</p> <!-- HTML_TAG_START -->${renderRichText(story.content.description)}<!-- HTML_TAG_END --> </div></div> <footer class="card-footer"><a${add_attribute("href", story.full_slug, 0)} class="card-footer-item">Scopri di più</a> ${story?.content.asset?.filename ? `<a${add_attribute("href", story?.content.asset?.filename, 0)} class="card-footer-item" target="_blank">Scarica allegato
								</a>` : ``} </footer></div> </div>`;
  })}</div></div> <div${spread([escape_object(__MELTUI_BUILDER_2__)], {})}><div class="columns is-multiline">${each(data.stories?.passed ?? [], (story) => {
    return `<div class="column is-half"><div class="card"><div class="card-image"><figure class="image is-3by2"><img${add_attribute("src", story.content.image?.filename, 0)}${add_attribute("alt", story.content.image?.filename, 0)}> </figure></div> <div class="card-content"><div class="content"><h2 class="title is-4">${escape(story.content.title)}</h2> <p class="subtitle is-5">${escape(story.content.date)}</p> <p class="subtitle is-5">${escape(story.content.place)}</p> <!-- HTML_TAG_START -->${renderRichText(story.content.description)}<!-- HTML_TAG_END --> </div></div> <footer class="card-footer"><a${add_attribute("href", story.full_slug, 0)} class="card-footer-item">Scopri di più</a> ${story?.content.asset?.filename ? `<a${add_attribute("href", story?.content.asset?.filename, 0)} class="card-footer-item" target="_blank">Scarica allegato
								</a>` : ``} </footer></div> </div>`;
  })}</div></div></div>`;
});
export {
  Page as default
};
