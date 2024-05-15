import {StoryblokStory} from 'storyblok-generate-ts'

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface CandidatiStoryblok {
  title?: string;
  image?: AssetStoryblok;
  intro?: string;
  description?: string;
  mayor?: boolean;
  labels?: (number | string)[];
  _uid: string;
  component: "Candidati";
  [k: string]: any;
}

export interface ChiSiamoStoryblok {
  title: string;
  image?: AssetStoryblok;
  description: string;
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
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface EventiStoryblok {
  title?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  description?: RichtextStoryblok;
  image?: AssetStoryblok;
  date: string;
  place?: string;
  asset?: AssetStoryblok;
  _uid: string;
  component: "Eventi";
  [k: string]: any;
}

export interface HomeStoryblok {
  title: string;
  subtitle?: string;
  image?: AssetStoryblok;
  description: RichtextStoryblok;
  _uid: string;
  component: "Home";
  [k: string]: any;
}

export interface NewsStoryblok {
  title?: string;
  date?: string;
  image?: AssetStoryblok;
  intro?: string;
  description?: string;
  _uid: string;
  component: "News";
  [k: string]: any;
}

export interface PageSettingsStoryblok {
  title?: string;
  image?: AssetStoryblok;
  description?: RichtextStoryblok;
  button?: string;
  link?: string;
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
