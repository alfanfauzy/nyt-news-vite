export interface Article {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    source: string;
    multimedia: Multimedia;
    headline: Headline;
    keywords: Keyword[];
    pub_date: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    byline: Byline;
    type_of_material: string;
    _id: string;
    word_count: number;
    uri: string;
}

export interface Multimedia {
    caption: string;
    credit: string;
    default: Default;
    thumbnail: Thumbnail;
}

export interface Default {
    url: string;
    height: number;
    width: number;
}

export interface Thumbnail {
    url: string;
    height: number;
    width: number;
}

export interface Headline {
    main: string;
    kicker: string;
    content_kicker: string;
    print_headline: string;
    name: string;
    seo: string;
    sub: string;
}

export interface Keyword {
    name: string;
    value: string;
    rank: number;
    major: string;
}

export interface Byline {
    original: string;
    person: Person[];
    organization: string;
}

export interface Person {
    firstname: string;
    middlename: string;
    lastname: string;
    qualifier: string;
    title: string;
    role: string;
    organization: string;
    rank: number;
}

export interface NYTResponse {
    status: string;
    copyright: string;
    response: {
        docs: Article[];
        meta: {
            hits: number;
            offset: number;
            time: number;
        };
    };
}

export interface SearchParams {
    q: string;
    page?: number;
    sort?: "newest" | "oldest" | "relevance";
    fq?: string;
    begin_date?: string;
    end_date?: string;
}
