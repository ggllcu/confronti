import {StoryblokStory} from 'storyblok-generate-ts'

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface CandidatiStoryblok {
  title?: string;
  image?: AssetStoryblok;
  intro?: string;
  description?: RichtextStoryblok;
  mayor?: boolean;
  labels?: (number | string)[];
  _uid: string;
  component: "Candidati";
  [k: string]: any;
}

export interface ChiSiamoStoryblok {
  title: string;
  image?: AssetStoryblok;
  description: RichtextStoryblok;
  starting_label?: string;
  steps: TappaTimelineStoryblok[];
  ending_label?: string;
  _uid: string;
  component: "Chi siamo";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface EventiStoryblok {
  title?: string;
  description?: RichtextStoryblok;
  image?: AssetStoryblok;
  date: string;
  place?: string;
  asset?: AssetStoryblok;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "Eventi";
  [k: string]: any;
}

export interface NewsStoryblok {
  title?: string;
  date?: string;
  image?: AssetStoryblok;
  intro?: string;
  description?: RichtextStoryblok;
  _uid: string;
  component: "News";
  [k: string]: any;
}

export interface PageSettingsStoryblok {
  title?: string;
  image?: AssetStoryblok;
  description?: RichtextStoryblok;
  _uid: string;
  component: "Page Settings";
  [k: string]: any;
}

export interface ProgrammaStoryblok {
  title: string;
  image?: AssetStoryblok;
  description: RichtextStoryblok;
  sections: SezioneProgrammaStoryblok[];
  _uid: string;
  component: "Programma";
  [k: string]: any;
}

export interface SezioneProgrammaStoryblok {
  title?: string;
  content?: RichtextStoryblok;
  _uid: string;
  component: "Sezione Programma";
  [k: string]: any;
}

export interface TappaTimelineStoryblok {
  title?: string;
  date?: string;
  description?: string;
  _uid: string;
  component: "Tappa Timeline";
  [k: string]: any;
}
