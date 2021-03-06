export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type Article = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<ArticleCreated_By>;
  updated_by?: Maybe<ArticleUpdated_By>;
  category?: Maybe<ArticleCategory>;
  image?: Maybe<File>;
  tags?: Maybe<Array<Maybe<ArticleTags>>>;
  content_images?: Maybe<Array<Maybe<File>>>;
  strapiId?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};


export type ArticlePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ArticleCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ArticleUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ArticleCategory = {
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type ArticleCategoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ArticleCategoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ArticleCategoryFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ArticleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ArticleEdge>;
  nodes: Array<Article>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ArticleGroupConnection>;
};


export type ArticleConnectionDistinctArgs = {
  field: ArticleFieldsEnum;
};


export type ArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ArticleFieldsEnum;
};

export type ArticleCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type ArticleCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ArticleCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ArticleCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ArticleEdge = {
  next?: Maybe<Article>;
  node: Article;
  previous?: Maybe<Article>;
};

export type ArticleFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'content'
  | 'published_at'
  | 'createdAt'
  | 'updatedAt'
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
  | 'category___name'
  | 'category___createdAt'
  | 'category___updatedAt'
  | 'category___created_by'
  | 'category___updated_by'
  | 'category___id'
  | 'image___sourceInstanceName'
  | 'image___absolutePath'
  | 'image___relativePath'
  | 'image___extension'
  | 'image___size'
  | 'image___prettySize'
  | 'image___modifiedTime'
  | 'image___accessTime'
  | 'image___changeTime'
  | 'image___birthTime'
  | 'image___root'
  | 'image___dir'
  | 'image___base'
  | 'image___ext'
  | 'image___name'
  | 'image___relativeDirectory'
  | 'image___dev'
  | 'image___mode'
  | 'image___nlink'
  | 'image___uid'
  | 'image___gid'
  | 'image___rdev'
  | 'image___ino'
  | 'image___atimeMs'
  | 'image___mtimeMs'
  | 'image___ctimeMs'
  | 'image___atime'
  | 'image___mtime'
  | 'image___ctime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___publicURL'
  | 'image___childImageSharp___fixed___base64'
  | 'image___childImageSharp___fixed___tracedSVG'
  | 'image___childImageSharp___fixed___aspectRatio'
  | 'image___childImageSharp___fixed___width'
  | 'image___childImageSharp___fixed___height'
  | 'image___childImageSharp___fixed___src'
  | 'image___childImageSharp___fixed___srcSet'
  | 'image___childImageSharp___fixed___srcWebp'
  | 'image___childImageSharp___fixed___srcSetWebp'
  | 'image___childImageSharp___fixed___originalName'
  | 'image___childImageSharp___resolutions___base64'
  | 'image___childImageSharp___resolutions___tracedSVG'
  | 'image___childImageSharp___resolutions___aspectRatio'
  | 'image___childImageSharp___resolutions___width'
  | 'image___childImageSharp___resolutions___height'
  | 'image___childImageSharp___resolutions___src'
  | 'image___childImageSharp___resolutions___srcSet'
  | 'image___childImageSharp___resolutions___srcWebp'
  | 'image___childImageSharp___resolutions___srcSetWebp'
  | 'image___childImageSharp___resolutions___originalName'
  | 'image___childImageSharp___fluid___base64'
  | 'image___childImageSharp___fluid___tracedSVG'
  | 'image___childImageSharp___fluid___aspectRatio'
  | 'image___childImageSharp___fluid___src'
  | 'image___childImageSharp___fluid___srcSet'
  | 'image___childImageSharp___fluid___srcWebp'
  | 'image___childImageSharp___fluid___srcSetWebp'
  | 'image___childImageSharp___fluid___sizes'
  | 'image___childImageSharp___fluid___originalImg'
  | 'image___childImageSharp___fluid___originalName'
  | 'image___childImageSharp___fluid___presentationWidth'
  | 'image___childImageSharp___fluid___presentationHeight'
  | 'image___childImageSharp___sizes___base64'
  | 'image___childImageSharp___sizes___tracedSVG'
  | 'image___childImageSharp___sizes___aspectRatio'
  | 'image___childImageSharp___sizes___src'
  | 'image___childImageSharp___sizes___srcSet'
  | 'image___childImageSharp___sizes___srcWebp'
  | 'image___childImageSharp___sizes___srcSetWebp'
  | 'image___childImageSharp___sizes___sizes'
  | 'image___childImageSharp___sizes___originalImg'
  | 'image___childImageSharp___sizes___originalName'
  | 'image___childImageSharp___sizes___presentationWidth'
  | 'image___childImageSharp___sizes___presentationHeight'
  | 'image___childImageSharp___original___width'
  | 'image___childImageSharp___original___height'
  | 'image___childImageSharp___original___src'
  | 'image___childImageSharp___resize___src'
  | 'image___childImageSharp___resize___tracedSVG'
  | 'image___childImageSharp___resize___width'
  | 'image___childImageSharp___resize___height'
  | 'image___childImageSharp___resize___aspectRatio'
  | 'image___childImageSharp___resize___originalName'
  | 'image___childImageSharp___id'
  | 'image___childImageSharp___parent___id'
  | 'image___childImageSharp___parent___children'
  | 'image___childImageSharp___children'
  | 'image___childImageSharp___children___id'
  | 'image___childImageSharp___children___children'
  | 'image___childImageSharp___internal___content'
  | 'image___childImageSharp___internal___contentDigest'
  | 'image___childImageSharp___internal___description'
  | 'image___childImageSharp___internal___fieldOwners'
  | 'image___childImageSharp___internal___ignoreType'
  | 'image___childImageSharp___internal___mediaType'
  | 'image___childImageSharp___internal___owner'
  | 'image___childImageSharp___internal___type'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'tags'
  | 'tags___articles'
  | 'tags___name'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___created_by'
  | 'tags___updated_by'
  | 'tags___id'
  | 'content_images'
  | 'content_images___sourceInstanceName'
  | 'content_images___absolutePath'
  | 'content_images___relativePath'
  | 'content_images___extension'
  | 'content_images___size'
  | 'content_images___prettySize'
  | 'content_images___modifiedTime'
  | 'content_images___accessTime'
  | 'content_images___changeTime'
  | 'content_images___birthTime'
  | 'content_images___root'
  | 'content_images___dir'
  | 'content_images___base'
  | 'content_images___ext'
  | 'content_images___name'
  | 'content_images___relativeDirectory'
  | 'content_images___dev'
  | 'content_images___mode'
  | 'content_images___nlink'
  | 'content_images___uid'
  | 'content_images___gid'
  | 'content_images___rdev'
  | 'content_images___ino'
  | 'content_images___atimeMs'
  | 'content_images___mtimeMs'
  | 'content_images___ctimeMs'
  | 'content_images___atime'
  | 'content_images___mtime'
  | 'content_images___ctime'
  | 'content_images___birthtime'
  | 'content_images___birthtimeMs'
  | 'content_images___blksize'
  | 'content_images___blocks'
  | 'content_images___publicURL'
  | 'content_images___childImageSharp___fixed___base64'
  | 'content_images___childImageSharp___fixed___tracedSVG'
  | 'content_images___childImageSharp___fixed___aspectRatio'
  | 'content_images___childImageSharp___fixed___width'
  | 'content_images___childImageSharp___fixed___height'
  | 'content_images___childImageSharp___fixed___src'
  | 'content_images___childImageSharp___fixed___srcSet'
  | 'content_images___childImageSharp___fixed___srcWebp'
  | 'content_images___childImageSharp___fixed___srcSetWebp'
  | 'content_images___childImageSharp___fixed___originalName'
  | 'content_images___childImageSharp___resolutions___base64'
  | 'content_images___childImageSharp___resolutions___tracedSVG'
  | 'content_images___childImageSharp___resolutions___aspectRatio'
  | 'content_images___childImageSharp___resolutions___width'
  | 'content_images___childImageSharp___resolutions___height'
  | 'content_images___childImageSharp___resolutions___src'
  | 'content_images___childImageSharp___resolutions___srcSet'
  | 'content_images___childImageSharp___resolutions___srcWebp'
  | 'content_images___childImageSharp___resolutions___srcSetWebp'
  | 'content_images___childImageSharp___resolutions___originalName'
  | 'content_images___childImageSharp___fluid___base64'
  | 'content_images___childImageSharp___fluid___tracedSVG'
  | 'content_images___childImageSharp___fluid___aspectRatio'
  | 'content_images___childImageSharp___fluid___src'
  | 'content_images___childImageSharp___fluid___srcSet'
  | 'content_images___childImageSharp___fluid___srcWebp'
  | 'content_images___childImageSharp___fluid___srcSetWebp'
  | 'content_images___childImageSharp___fluid___sizes'
  | 'content_images___childImageSharp___fluid___originalImg'
  | 'content_images___childImageSharp___fluid___originalName'
  | 'content_images___childImageSharp___fluid___presentationWidth'
  | 'content_images___childImageSharp___fluid___presentationHeight'
  | 'content_images___childImageSharp___sizes___base64'
  | 'content_images___childImageSharp___sizes___tracedSVG'
  | 'content_images___childImageSharp___sizes___aspectRatio'
  | 'content_images___childImageSharp___sizes___src'
  | 'content_images___childImageSharp___sizes___srcSet'
  | 'content_images___childImageSharp___sizes___srcWebp'
  | 'content_images___childImageSharp___sizes___srcSetWebp'
  | 'content_images___childImageSharp___sizes___sizes'
  | 'content_images___childImageSharp___sizes___originalImg'
  | 'content_images___childImageSharp___sizes___originalName'
  | 'content_images___childImageSharp___sizes___presentationWidth'
  | 'content_images___childImageSharp___sizes___presentationHeight'
  | 'content_images___childImageSharp___original___width'
  | 'content_images___childImageSharp___original___height'
  | 'content_images___childImageSharp___original___src'
  | 'content_images___childImageSharp___resize___src'
  | 'content_images___childImageSharp___resize___tracedSVG'
  | 'content_images___childImageSharp___resize___width'
  | 'content_images___childImageSharp___resize___height'
  | 'content_images___childImageSharp___resize___aspectRatio'
  | 'content_images___childImageSharp___resize___originalName'
  | 'content_images___childImageSharp___id'
  | 'content_images___childImageSharp___parent___id'
  | 'content_images___childImageSharp___parent___children'
  | 'content_images___childImageSharp___children'
  | 'content_images___childImageSharp___children___id'
  | 'content_images___childImageSharp___children___children'
  | 'content_images___childImageSharp___internal___content'
  | 'content_images___childImageSharp___internal___contentDigest'
  | 'content_images___childImageSharp___internal___description'
  | 'content_images___childImageSharp___internal___fieldOwners'
  | 'content_images___childImageSharp___internal___ignoreType'
  | 'content_images___childImageSharp___internal___mediaType'
  | 'content_images___childImageSharp___internal___owner'
  | 'content_images___childImageSharp___internal___type'
  | 'content_images___id'
  | 'content_images___parent___id'
  | 'content_images___parent___parent___id'
  | 'content_images___parent___parent___children'
  | 'content_images___parent___children'
  | 'content_images___parent___children___id'
  | 'content_images___parent___children___children'
  | 'content_images___parent___internal___content'
  | 'content_images___parent___internal___contentDigest'
  | 'content_images___parent___internal___description'
  | 'content_images___parent___internal___fieldOwners'
  | 'content_images___parent___internal___ignoreType'
  | 'content_images___parent___internal___mediaType'
  | 'content_images___parent___internal___owner'
  | 'content_images___parent___internal___type'
  | 'content_images___children'
  | 'content_images___children___id'
  | 'content_images___children___parent___id'
  | 'content_images___children___parent___children'
  | 'content_images___children___children'
  | 'content_images___children___children___id'
  | 'content_images___children___children___children'
  | 'content_images___children___internal___content'
  | 'content_images___children___internal___contentDigest'
  | 'content_images___children___internal___description'
  | 'content_images___children___internal___fieldOwners'
  | 'content_images___children___internal___ignoreType'
  | 'content_images___children___internal___mediaType'
  | 'content_images___children___internal___owner'
  | 'content_images___children___internal___type'
  | 'content_images___internal___content'
  | 'content_images___internal___contentDigest'
  | 'content_images___internal___description'
  | 'content_images___internal___fieldOwners'
  | 'content_images___internal___ignoreType'
  | 'content_images___internal___mediaType'
  | 'content_images___internal___owner'
  | 'content_images___internal___type'
  | 'strapiId'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ArticleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<ArticleCreated_ByFilterInput>;
  updated_by?: Maybe<ArticleUpdated_ByFilterInput>;
  category?: Maybe<ArticleCategoryFilterInput>;
  image?: Maybe<FileFilterInput>;
  tags?: Maybe<ArticleTagsFilterListInput>;
  content_images?: Maybe<FileFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ArticleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ArticleEdge>;
  nodes: Array<Article>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ArticleSortInput = {
  fields?: Maybe<Array<Maybe<ArticleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ArticleTags = {
  articles?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type ArticleTagsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ArticleTagsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ArticleTagsFilterInput = {
  articles?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ArticleTagsFilterListInput = {
  elemMatch?: Maybe<ArticleTagsFilterInput>;
};

export type ArticleUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type ArticleUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ArticleUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ArticleUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileFilterListInput = {
  elemMatch?: Maybe<FileFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  article?: Maybe<Article>;
  allArticle: ArticleConnection;
  strapiSidebar?: Maybe<StrapiSidebar>;
  allStrapiSidebar: StrapiSidebarConnection;
  strapiPage?: Maybe<StrapiPage>;
  allStrapiPage: StrapiPageConnection;
  strapiCategory?: Maybe<StrapiCategory>;
  allStrapiCategory: StrapiCategoryConnection;
  strapiArticle?: Maybe<StrapiArticle>;
  allStrapiArticle: StrapiArticleConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryArticleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<ArticleCreated_ByFilterInput>;
  updated_by?: Maybe<ArticleUpdated_ByFilterInput>;
  category?: Maybe<ArticleCategoryFilterInput>;
  image?: Maybe<FileFilterInput>;
  tags?: Maybe<ArticleTagsFilterListInput>;
  content_images?: Maybe<FileFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllArticleArgs = {
  filter?: Maybe<ArticleFilterInput>;
  sort?: Maybe<ArticleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiSidebarArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiSidebarCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiSidebarUpdated_ByFilterInput>;
  content_images?: Maybe<FileFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiSidebarArgs = {
  filter?: Maybe<StrapiSidebarFilterInput>;
  sort?: Maybe<StrapiSidebarSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  image?: Maybe<FileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiPageCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiPageUpdated_ByFilterInput>;
  content_images?: Maybe<FileFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiPageArgs = {
  filter?: Maybe<StrapiPageFilterInput>;
  sort?: Maybe<StrapiPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiCategoryCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiCategoryUpdated_ByFilterInput>;
  articles?: Maybe<StrapiCategoryArticlesFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiCategoryArgs = {
  filter?: Maybe<StrapiCategoryFilterInput>;
  sort?: Maybe<StrapiCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiArticleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiArticleCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiArticleUpdated_ByFilterInput>;
  category?: Maybe<StrapiArticleCategoryFilterInput>;
  image?: Maybe<FileFilterInput>;
  tags?: Maybe<StrapiArticleTagsFilterListInput>;
  content_images?: Maybe<FileFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllStrapiArticleArgs = {
  filter?: Maybe<StrapiArticleFilterInput>;
  sort?: Maybe<StrapiArticleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___concept'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___github'
  | 'siteMetadata___twitter'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  humanPageNumber?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  numberOfPages?: Maybe<Scalars['Int']>;
  previousPagePath?: Maybe<Scalars['String']>;
  nextPagePath?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  pageNumber?: Maybe<IntQueryOperatorInput>;
  humanPageNumber?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  numberOfPages?: Maybe<IntQueryOperatorInput>;
  previousPagePath?: Maybe<StringQueryOperatorInput>;
  nextPagePath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'context___pageNumber'
  | 'context___humanPageNumber'
  | 'context___skip'
  | 'context___limit'
  | 'context___numberOfPages'
  | 'context___previousPagePath'
  | 'context___nextPagePath'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___trackingId'
  | 'pluginCreator___pluginOptions___head'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___apiURL'
  | 'pluginCreator___pluginOptions___contentTypes'
  | 'pluginCreator___pluginOptions___queryLimit'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___siteUrl'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___sitemapSize'
  | 'pluginCreator___pluginOptions___color'
  | 'pluginCreator___pluginOptions___showSpinner'
  | 'pluginCreator___pluginOptions___appId'
  | 'pluginCreator___pluginOptions___includeInDevelopment'
  | 'pluginCreator___pluginOptions___debug'
  | 'pluginCreator___pluginOptions___xfbml'
  | 'pluginCreator___pluginOptions___language'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___head'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___apiURL'
  | 'pluginOptions___contentTypes'
  | 'pluginOptions___queryLimit'
  | 'pluginOptions___markdownImages___typesToParse___article'
  | 'pluginOptions___markdownImages___typesToParse___page'
  | 'pluginOptions___markdownImages___typesToParse___sidebar'
  | 'pluginOptions___fileName'
  | 'pluginOptions___siteUrl'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___sitemapSize'
  | 'pluginOptions___color'
  | 'pluginOptions___showSpinner'
  | 'pluginOptions___appId'
  | 'pluginOptions___includeInDevelopment'
  | 'pluginOptions___debug'
  | 'pluginOptions___xfbml'
  | 'pluginOptions___language'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  apiURL?: Maybe<Scalars['String']>;
  contentTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  queryLimit?: Maybe<Scalars['Int']>;
  markdownImages?: Maybe<SitePluginPluginOptionsMarkdownImages>;
  fileName?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  sitemapSize?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  showSpinner?: Maybe<Scalars['Boolean']>;
  appId?: Maybe<Scalars['String']>;
  includeInDevelopment?: Maybe<Scalars['Boolean']>;
  debug?: Maybe<Scalars['Boolean']>;
  xfbml?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  apiURL?: Maybe<StringQueryOperatorInput>;
  contentTypes?: Maybe<StringQueryOperatorInput>;
  queryLimit?: Maybe<IntQueryOperatorInput>;
  markdownImages?: Maybe<SitePluginPluginOptionsMarkdownImagesFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  sitemapSize?: Maybe<IntQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  showSpinner?: Maybe<BooleanQueryOperatorInput>;
  appId?: Maybe<StringQueryOperatorInput>;
  includeInDevelopment?: Maybe<BooleanQueryOperatorInput>;
  debug?: Maybe<BooleanQueryOperatorInput>;
  xfbml?: Maybe<BooleanQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsMarkdownImages = {
  typesToParse?: Maybe<SitePluginPluginOptionsMarkdownImagesTypesToParse>;
};

export type SitePluginPluginOptionsMarkdownImagesFilterInput = {
  typesToParse?: Maybe<SitePluginPluginOptionsMarkdownImagesTypesToParseFilterInput>;
};

export type SitePluginPluginOptionsMarkdownImagesTypesToParse = {
  article?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Array<Maybe<Scalars['String']>>>;
  sidebar?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsMarkdownImagesTypesToParseFilterInput = {
  article?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<StringQueryOperatorInput>;
  sidebar?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  concept?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StrapiArticle = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<StrapiArticleCreated_By>;
  updated_by?: Maybe<StrapiArticleUpdated_By>;
  category?: Maybe<StrapiArticleCategory>;
  image?: Maybe<File>;
  tags?: Maybe<Array<Maybe<StrapiArticleTags>>>;
  content_images?: Maybe<Array<Maybe<File>>>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiArticlePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiArticleCategory = {
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiArticleCategoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleCategoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiArticleCategoryFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiArticleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiArticleEdge>;
  nodes: Array<StrapiArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiArticleGroupConnection>;
};


export type StrapiArticleConnectionDistinctArgs = {
  field: StrapiArticleFieldsEnum;
};


export type StrapiArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiArticleFieldsEnum;
};

export type StrapiArticleCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiArticleCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiArticleCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiArticleEdge = {
  next?: Maybe<StrapiArticle>;
  node: StrapiArticle;
  previous?: Maybe<StrapiArticle>;
};

export type StrapiArticleFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'content'
  | 'published_at'
  | 'createdAt'
  | 'updatedAt'
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
  | 'category___name'
  | 'category___createdAt'
  | 'category___updatedAt'
  | 'category___created_by'
  | 'category___updated_by'
  | 'category___id'
  | 'image___sourceInstanceName'
  | 'image___absolutePath'
  | 'image___relativePath'
  | 'image___extension'
  | 'image___size'
  | 'image___prettySize'
  | 'image___modifiedTime'
  | 'image___accessTime'
  | 'image___changeTime'
  | 'image___birthTime'
  | 'image___root'
  | 'image___dir'
  | 'image___base'
  | 'image___ext'
  | 'image___name'
  | 'image___relativeDirectory'
  | 'image___dev'
  | 'image___mode'
  | 'image___nlink'
  | 'image___uid'
  | 'image___gid'
  | 'image___rdev'
  | 'image___ino'
  | 'image___atimeMs'
  | 'image___mtimeMs'
  | 'image___ctimeMs'
  | 'image___atime'
  | 'image___mtime'
  | 'image___ctime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___publicURL'
  | 'image___childImageSharp___fixed___base64'
  | 'image___childImageSharp___fixed___tracedSVG'
  | 'image___childImageSharp___fixed___aspectRatio'
  | 'image___childImageSharp___fixed___width'
  | 'image___childImageSharp___fixed___height'
  | 'image___childImageSharp___fixed___src'
  | 'image___childImageSharp___fixed___srcSet'
  | 'image___childImageSharp___fixed___srcWebp'
  | 'image___childImageSharp___fixed___srcSetWebp'
  | 'image___childImageSharp___fixed___originalName'
  | 'image___childImageSharp___resolutions___base64'
  | 'image___childImageSharp___resolutions___tracedSVG'
  | 'image___childImageSharp___resolutions___aspectRatio'
  | 'image___childImageSharp___resolutions___width'
  | 'image___childImageSharp___resolutions___height'
  | 'image___childImageSharp___resolutions___src'
  | 'image___childImageSharp___resolutions___srcSet'
  | 'image___childImageSharp___resolutions___srcWebp'
  | 'image___childImageSharp___resolutions___srcSetWebp'
  | 'image___childImageSharp___resolutions___originalName'
  | 'image___childImageSharp___fluid___base64'
  | 'image___childImageSharp___fluid___tracedSVG'
  | 'image___childImageSharp___fluid___aspectRatio'
  | 'image___childImageSharp___fluid___src'
  | 'image___childImageSharp___fluid___srcSet'
  | 'image___childImageSharp___fluid___srcWebp'
  | 'image___childImageSharp___fluid___srcSetWebp'
  | 'image___childImageSharp___fluid___sizes'
  | 'image___childImageSharp___fluid___originalImg'
  | 'image___childImageSharp___fluid___originalName'
  | 'image___childImageSharp___fluid___presentationWidth'
  | 'image___childImageSharp___fluid___presentationHeight'
  | 'image___childImageSharp___sizes___base64'
  | 'image___childImageSharp___sizes___tracedSVG'
  | 'image___childImageSharp___sizes___aspectRatio'
  | 'image___childImageSharp___sizes___src'
  | 'image___childImageSharp___sizes___srcSet'
  | 'image___childImageSharp___sizes___srcWebp'
  | 'image___childImageSharp___sizes___srcSetWebp'
  | 'image___childImageSharp___sizes___sizes'
  | 'image___childImageSharp___sizes___originalImg'
  | 'image___childImageSharp___sizes___originalName'
  | 'image___childImageSharp___sizes___presentationWidth'
  | 'image___childImageSharp___sizes___presentationHeight'
  | 'image___childImageSharp___original___width'
  | 'image___childImageSharp___original___height'
  | 'image___childImageSharp___original___src'
  | 'image___childImageSharp___resize___src'
  | 'image___childImageSharp___resize___tracedSVG'
  | 'image___childImageSharp___resize___width'
  | 'image___childImageSharp___resize___height'
  | 'image___childImageSharp___resize___aspectRatio'
  | 'image___childImageSharp___resize___originalName'
  | 'image___childImageSharp___id'
  | 'image___childImageSharp___parent___id'
  | 'image___childImageSharp___parent___children'
  | 'image___childImageSharp___children'
  | 'image___childImageSharp___children___id'
  | 'image___childImageSharp___children___children'
  | 'image___childImageSharp___internal___content'
  | 'image___childImageSharp___internal___contentDigest'
  | 'image___childImageSharp___internal___description'
  | 'image___childImageSharp___internal___fieldOwners'
  | 'image___childImageSharp___internal___ignoreType'
  | 'image___childImageSharp___internal___mediaType'
  | 'image___childImageSharp___internal___owner'
  | 'image___childImageSharp___internal___type'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'tags'
  | 'tags___articles'
  | 'tags___name'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___created_by'
  | 'tags___updated_by'
  | 'tags___id'
  | 'content_images'
  | 'content_images___sourceInstanceName'
  | 'content_images___absolutePath'
  | 'content_images___relativePath'
  | 'content_images___extension'
  | 'content_images___size'
  | 'content_images___prettySize'
  | 'content_images___modifiedTime'
  | 'content_images___accessTime'
  | 'content_images___changeTime'
  | 'content_images___birthTime'
  | 'content_images___root'
  | 'content_images___dir'
  | 'content_images___base'
  | 'content_images___ext'
  | 'content_images___name'
  | 'content_images___relativeDirectory'
  | 'content_images___dev'
  | 'content_images___mode'
  | 'content_images___nlink'
  | 'content_images___uid'
  | 'content_images___gid'
  | 'content_images___rdev'
  | 'content_images___ino'
  | 'content_images___atimeMs'
  | 'content_images___mtimeMs'
  | 'content_images___ctimeMs'
  | 'content_images___atime'
  | 'content_images___mtime'
  | 'content_images___ctime'
  | 'content_images___birthtime'
  | 'content_images___birthtimeMs'
  | 'content_images___blksize'
  | 'content_images___blocks'
  | 'content_images___publicURL'
  | 'content_images___childImageSharp___fixed___base64'
  | 'content_images___childImageSharp___fixed___tracedSVG'
  | 'content_images___childImageSharp___fixed___aspectRatio'
  | 'content_images___childImageSharp___fixed___width'
  | 'content_images___childImageSharp___fixed___height'
  | 'content_images___childImageSharp___fixed___src'
  | 'content_images___childImageSharp___fixed___srcSet'
  | 'content_images___childImageSharp___fixed___srcWebp'
  | 'content_images___childImageSharp___fixed___srcSetWebp'
  | 'content_images___childImageSharp___fixed___originalName'
  | 'content_images___childImageSharp___resolutions___base64'
  | 'content_images___childImageSharp___resolutions___tracedSVG'
  | 'content_images___childImageSharp___resolutions___aspectRatio'
  | 'content_images___childImageSharp___resolutions___width'
  | 'content_images___childImageSharp___resolutions___height'
  | 'content_images___childImageSharp___resolutions___src'
  | 'content_images___childImageSharp___resolutions___srcSet'
  | 'content_images___childImageSharp___resolutions___srcWebp'
  | 'content_images___childImageSharp___resolutions___srcSetWebp'
  | 'content_images___childImageSharp___resolutions___originalName'
  | 'content_images___childImageSharp___fluid___base64'
  | 'content_images___childImageSharp___fluid___tracedSVG'
  | 'content_images___childImageSharp___fluid___aspectRatio'
  | 'content_images___childImageSharp___fluid___src'
  | 'content_images___childImageSharp___fluid___srcSet'
  | 'content_images___childImageSharp___fluid___srcWebp'
  | 'content_images___childImageSharp___fluid___srcSetWebp'
  | 'content_images___childImageSharp___fluid___sizes'
  | 'content_images___childImageSharp___fluid___originalImg'
  | 'content_images___childImageSharp___fluid___originalName'
  | 'content_images___childImageSharp___fluid___presentationWidth'
  | 'content_images___childImageSharp___fluid___presentationHeight'
  | 'content_images___childImageSharp___sizes___base64'
  | 'content_images___childImageSharp___sizes___tracedSVG'
  | 'content_images___childImageSharp___sizes___aspectRatio'
  | 'content_images___childImageSharp___sizes___src'
  | 'content_images___childImageSharp___sizes___srcSet'
  | 'content_images___childImageSharp___sizes___srcWebp'
  | 'content_images___childImageSharp___sizes___srcSetWebp'
  | 'content_images___childImageSharp___sizes___sizes'
  | 'content_images___childImageSharp___sizes___originalImg'
  | 'content_images___childImageSharp___sizes___originalName'
  | 'content_images___childImageSharp___sizes___presentationWidth'
  | 'content_images___childImageSharp___sizes___presentationHeight'
  | 'content_images___childImageSharp___original___width'
  | 'content_images___childImageSharp___original___height'
  | 'content_images___childImageSharp___original___src'
  | 'content_images___childImageSharp___resize___src'
  | 'content_images___childImageSharp___resize___tracedSVG'
  | 'content_images___childImageSharp___resize___width'
  | 'content_images___childImageSharp___resize___height'
  | 'content_images___childImageSharp___resize___aspectRatio'
  | 'content_images___childImageSharp___resize___originalName'
  | 'content_images___childImageSharp___id'
  | 'content_images___childImageSharp___parent___id'
  | 'content_images___childImageSharp___parent___children'
  | 'content_images___childImageSharp___children'
  | 'content_images___childImageSharp___children___id'
  | 'content_images___childImageSharp___children___children'
  | 'content_images___childImageSharp___internal___content'
  | 'content_images___childImageSharp___internal___contentDigest'
  | 'content_images___childImageSharp___internal___description'
  | 'content_images___childImageSharp___internal___fieldOwners'
  | 'content_images___childImageSharp___internal___ignoreType'
  | 'content_images___childImageSharp___internal___mediaType'
  | 'content_images___childImageSharp___internal___owner'
  | 'content_images___childImageSharp___internal___type'
  | 'content_images___id'
  | 'content_images___parent___id'
  | 'content_images___parent___parent___id'
  | 'content_images___parent___parent___children'
  | 'content_images___parent___children'
  | 'content_images___parent___children___id'
  | 'content_images___parent___children___children'
  | 'content_images___parent___internal___content'
  | 'content_images___parent___internal___contentDigest'
  | 'content_images___parent___internal___description'
  | 'content_images___parent___internal___fieldOwners'
  | 'content_images___parent___internal___ignoreType'
  | 'content_images___parent___internal___mediaType'
  | 'content_images___parent___internal___owner'
  | 'content_images___parent___internal___type'
  | 'content_images___children'
  | 'content_images___children___id'
  | 'content_images___children___parent___id'
  | 'content_images___children___parent___children'
  | 'content_images___children___children'
  | 'content_images___children___children___id'
  | 'content_images___children___children___children'
  | 'content_images___children___internal___content'
  | 'content_images___children___internal___contentDigest'
  | 'content_images___children___internal___description'
  | 'content_images___children___internal___fieldOwners'
  | 'content_images___children___internal___ignoreType'
  | 'content_images___children___internal___mediaType'
  | 'content_images___children___internal___owner'
  | 'content_images___children___internal___type'
  | 'content_images___internal___content'
  | 'content_images___internal___contentDigest'
  | 'content_images___internal___description'
  | 'content_images___internal___fieldOwners'
  | 'content_images___internal___ignoreType'
  | 'content_images___internal___mediaType'
  | 'content_images___internal___owner'
  | 'content_images___internal___type'
  | 'strapiId';

export type StrapiArticleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiArticleCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiArticleUpdated_ByFilterInput>;
  category?: Maybe<StrapiArticleCategoryFilterInput>;
  image?: Maybe<FileFilterInput>;
  tags?: Maybe<StrapiArticleTagsFilterListInput>;
  content_images?: Maybe<FileFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiArticleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiArticleEdge>;
  nodes: Array<StrapiArticle>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiArticleSortInput = {
  fields?: Maybe<Array<Maybe<StrapiArticleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiArticleTags = {
  articles?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiArticleTagsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleTagsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiArticleTagsFilterInput = {
  articles?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiArticleTagsFilterListInput = {
  elemMatch?: Maybe<StrapiArticleTagsFilterInput>;
};

export type StrapiArticleUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiArticleUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiArticleUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCategory = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<StrapiCategoryCreated_By>;
  updated_by?: Maybe<StrapiCategoryUpdated_By>;
  articles?: Maybe<Array<Maybe<StrapiCategoryArticles>>>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiCategoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCategoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCategoryArticles = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCategoryArticlesPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCategoryArticlesCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCategoryArticlesUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCategoryArticlesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StringQueryOperatorInput>;
  updated_by?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCategoryArticlesFilterListInput = {
  elemMatch?: Maybe<StrapiCategoryArticlesFilterInput>;
};

export type StrapiCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiCategoryEdge>;
  nodes: Array<StrapiCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiCategoryGroupConnection>;
};


export type StrapiCategoryConnectionDistinctArgs = {
  field: StrapiCategoryFieldsEnum;
};


export type StrapiCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiCategoryFieldsEnum;
};

export type StrapiCategoryCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCategoryCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCategoryCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCategoryCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCategoryEdge = {
  next?: Maybe<StrapiCategory>;
  node: StrapiCategory;
  previous?: Maybe<StrapiCategory>;
};

export type StrapiCategoryFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'createdAt'
  | 'updatedAt'
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
  | 'articles'
  | 'articles___title'
  | 'articles___content'
  | 'articles___published_at'
  | 'articles___createdAt'
  | 'articles___updatedAt'
  | 'articles___created_by'
  | 'articles___updated_by'
  | 'articles___category'
  | 'articles___image___sourceInstanceName'
  | 'articles___image___absolutePath'
  | 'articles___image___relativePath'
  | 'articles___image___extension'
  | 'articles___image___size'
  | 'articles___image___prettySize'
  | 'articles___image___modifiedTime'
  | 'articles___image___accessTime'
  | 'articles___image___changeTime'
  | 'articles___image___birthTime'
  | 'articles___image___root'
  | 'articles___image___dir'
  | 'articles___image___base'
  | 'articles___image___ext'
  | 'articles___image___name'
  | 'articles___image___relativeDirectory'
  | 'articles___image___dev'
  | 'articles___image___mode'
  | 'articles___image___nlink'
  | 'articles___image___uid'
  | 'articles___image___gid'
  | 'articles___image___rdev'
  | 'articles___image___ino'
  | 'articles___image___atimeMs'
  | 'articles___image___mtimeMs'
  | 'articles___image___ctimeMs'
  | 'articles___image___atime'
  | 'articles___image___mtime'
  | 'articles___image___ctime'
  | 'articles___image___birthtime'
  | 'articles___image___birthtimeMs'
  | 'articles___image___blksize'
  | 'articles___image___blocks'
  | 'articles___image___publicURL'
  | 'articles___image___childImageSharp___id'
  | 'articles___image___childImageSharp___children'
  | 'articles___image___id'
  | 'articles___image___parent___id'
  | 'articles___image___parent___children'
  | 'articles___image___children'
  | 'articles___image___children___id'
  | 'articles___image___children___children'
  | 'articles___image___internal___content'
  | 'articles___image___internal___contentDigest'
  | 'articles___image___internal___description'
  | 'articles___image___internal___fieldOwners'
  | 'articles___image___internal___ignoreType'
  | 'articles___image___internal___mediaType'
  | 'articles___image___internal___owner'
  | 'articles___image___internal___type'
  | 'articles___id'
  | 'strapiId';

export type StrapiCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiCategoryCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiCategoryUpdated_ByFilterInput>;
  articles?: Maybe<StrapiCategoryArticlesFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiCategoryEdge>;
  nodes: Array<StrapiCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiCategorySortInput = {
  fields?: Maybe<Array<Maybe<StrapiCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiCategoryUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiCategoryUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCategoryUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCategoryUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  image?: Maybe<File>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<StrapiPageCreated_By>;
  updated_by?: Maybe<StrapiPageUpdated_By>;
  content_images?: Maybe<Array<Maybe<File>>>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPageEdge>;
  nodes: Array<StrapiPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiPageGroupConnection>;
};


export type StrapiPageConnectionDistinctArgs = {
  field: StrapiPageFieldsEnum;
};


export type StrapiPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiPageFieldsEnum;
};

export type StrapiPageCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiPageCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPageCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPageCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPageEdge = {
  next?: Maybe<StrapiPage>;
  node: StrapiPage;
  previous?: Maybe<StrapiPage>;
};

export type StrapiPageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'image___sourceInstanceName'
  | 'image___absolutePath'
  | 'image___relativePath'
  | 'image___extension'
  | 'image___size'
  | 'image___prettySize'
  | 'image___modifiedTime'
  | 'image___accessTime'
  | 'image___changeTime'
  | 'image___birthTime'
  | 'image___root'
  | 'image___dir'
  | 'image___base'
  | 'image___ext'
  | 'image___name'
  | 'image___relativeDirectory'
  | 'image___dev'
  | 'image___mode'
  | 'image___nlink'
  | 'image___uid'
  | 'image___gid'
  | 'image___rdev'
  | 'image___ino'
  | 'image___atimeMs'
  | 'image___mtimeMs'
  | 'image___ctimeMs'
  | 'image___atime'
  | 'image___mtime'
  | 'image___ctime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___publicURL'
  | 'image___childImageSharp___fixed___base64'
  | 'image___childImageSharp___fixed___tracedSVG'
  | 'image___childImageSharp___fixed___aspectRatio'
  | 'image___childImageSharp___fixed___width'
  | 'image___childImageSharp___fixed___height'
  | 'image___childImageSharp___fixed___src'
  | 'image___childImageSharp___fixed___srcSet'
  | 'image___childImageSharp___fixed___srcWebp'
  | 'image___childImageSharp___fixed___srcSetWebp'
  | 'image___childImageSharp___fixed___originalName'
  | 'image___childImageSharp___resolutions___base64'
  | 'image___childImageSharp___resolutions___tracedSVG'
  | 'image___childImageSharp___resolutions___aspectRatio'
  | 'image___childImageSharp___resolutions___width'
  | 'image___childImageSharp___resolutions___height'
  | 'image___childImageSharp___resolutions___src'
  | 'image___childImageSharp___resolutions___srcSet'
  | 'image___childImageSharp___resolutions___srcWebp'
  | 'image___childImageSharp___resolutions___srcSetWebp'
  | 'image___childImageSharp___resolutions___originalName'
  | 'image___childImageSharp___fluid___base64'
  | 'image___childImageSharp___fluid___tracedSVG'
  | 'image___childImageSharp___fluid___aspectRatio'
  | 'image___childImageSharp___fluid___src'
  | 'image___childImageSharp___fluid___srcSet'
  | 'image___childImageSharp___fluid___srcWebp'
  | 'image___childImageSharp___fluid___srcSetWebp'
  | 'image___childImageSharp___fluid___sizes'
  | 'image___childImageSharp___fluid___originalImg'
  | 'image___childImageSharp___fluid___originalName'
  | 'image___childImageSharp___fluid___presentationWidth'
  | 'image___childImageSharp___fluid___presentationHeight'
  | 'image___childImageSharp___sizes___base64'
  | 'image___childImageSharp___sizes___tracedSVG'
  | 'image___childImageSharp___sizes___aspectRatio'
  | 'image___childImageSharp___sizes___src'
  | 'image___childImageSharp___sizes___srcSet'
  | 'image___childImageSharp___sizes___srcWebp'
  | 'image___childImageSharp___sizes___srcSetWebp'
  | 'image___childImageSharp___sizes___sizes'
  | 'image___childImageSharp___sizes___originalImg'
  | 'image___childImageSharp___sizes___originalName'
  | 'image___childImageSharp___sizes___presentationWidth'
  | 'image___childImageSharp___sizes___presentationHeight'
  | 'image___childImageSharp___original___width'
  | 'image___childImageSharp___original___height'
  | 'image___childImageSharp___original___src'
  | 'image___childImageSharp___resize___src'
  | 'image___childImageSharp___resize___tracedSVG'
  | 'image___childImageSharp___resize___width'
  | 'image___childImageSharp___resize___height'
  | 'image___childImageSharp___resize___aspectRatio'
  | 'image___childImageSharp___resize___originalName'
  | 'image___childImageSharp___id'
  | 'image___childImageSharp___parent___id'
  | 'image___childImageSharp___parent___children'
  | 'image___childImageSharp___children'
  | 'image___childImageSharp___children___id'
  | 'image___childImageSharp___children___children'
  | 'image___childImageSharp___internal___content'
  | 'image___childImageSharp___internal___contentDigest'
  | 'image___childImageSharp___internal___description'
  | 'image___childImageSharp___internal___fieldOwners'
  | 'image___childImageSharp___internal___ignoreType'
  | 'image___childImageSharp___internal___mediaType'
  | 'image___childImageSharp___internal___owner'
  | 'image___childImageSharp___internal___type'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'title'
  | 'content'
  | 'createdAt'
  | 'updatedAt'
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
  | 'content_images'
  | 'content_images___sourceInstanceName'
  | 'content_images___absolutePath'
  | 'content_images___relativePath'
  | 'content_images___extension'
  | 'content_images___size'
  | 'content_images___prettySize'
  | 'content_images___modifiedTime'
  | 'content_images___accessTime'
  | 'content_images___changeTime'
  | 'content_images___birthTime'
  | 'content_images___root'
  | 'content_images___dir'
  | 'content_images___base'
  | 'content_images___ext'
  | 'content_images___name'
  | 'content_images___relativeDirectory'
  | 'content_images___dev'
  | 'content_images___mode'
  | 'content_images___nlink'
  | 'content_images___uid'
  | 'content_images___gid'
  | 'content_images___rdev'
  | 'content_images___ino'
  | 'content_images___atimeMs'
  | 'content_images___mtimeMs'
  | 'content_images___ctimeMs'
  | 'content_images___atime'
  | 'content_images___mtime'
  | 'content_images___ctime'
  | 'content_images___birthtime'
  | 'content_images___birthtimeMs'
  | 'content_images___blksize'
  | 'content_images___blocks'
  | 'content_images___publicURL'
  | 'content_images___childImageSharp___fixed___base64'
  | 'content_images___childImageSharp___fixed___tracedSVG'
  | 'content_images___childImageSharp___fixed___aspectRatio'
  | 'content_images___childImageSharp___fixed___width'
  | 'content_images___childImageSharp___fixed___height'
  | 'content_images___childImageSharp___fixed___src'
  | 'content_images___childImageSharp___fixed___srcSet'
  | 'content_images___childImageSharp___fixed___srcWebp'
  | 'content_images___childImageSharp___fixed___srcSetWebp'
  | 'content_images___childImageSharp___fixed___originalName'
  | 'content_images___childImageSharp___resolutions___base64'
  | 'content_images___childImageSharp___resolutions___tracedSVG'
  | 'content_images___childImageSharp___resolutions___aspectRatio'
  | 'content_images___childImageSharp___resolutions___width'
  | 'content_images___childImageSharp___resolutions___height'
  | 'content_images___childImageSharp___resolutions___src'
  | 'content_images___childImageSharp___resolutions___srcSet'
  | 'content_images___childImageSharp___resolutions___srcWebp'
  | 'content_images___childImageSharp___resolutions___srcSetWebp'
  | 'content_images___childImageSharp___resolutions___originalName'
  | 'content_images___childImageSharp___fluid___base64'
  | 'content_images___childImageSharp___fluid___tracedSVG'
  | 'content_images___childImageSharp___fluid___aspectRatio'
  | 'content_images___childImageSharp___fluid___src'
  | 'content_images___childImageSharp___fluid___srcSet'
  | 'content_images___childImageSharp___fluid___srcWebp'
  | 'content_images___childImageSharp___fluid___srcSetWebp'
  | 'content_images___childImageSharp___fluid___sizes'
  | 'content_images___childImageSharp___fluid___originalImg'
  | 'content_images___childImageSharp___fluid___originalName'
  | 'content_images___childImageSharp___fluid___presentationWidth'
  | 'content_images___childImageSharp___fluid___presentationHeight'
  | 'content_images___childImageSharp___sizes___base64'
  | 'content_images___childImageSharp___sizes___tracedSVG'
  | 'content_images___childImageSharp___sizes___aspectRatio'
  | 'content_images___childImageSharp___sizes___src'
  | 'content_images___childImageSharp___sizes___srcSet'
  | 'content_images___childImageSharp___sizes___srcWebp'
  | 'content_images___childImageSharp___sizes___srcSetWebp'
  | 'content_images___childImageSharp___sizes___sizes'
  | 'content_images___childImageSharp___sizes___originalImg'
  | 'content_images___childImageSharp___sizes___originalName'
  | 'content_images___childImageSharp___sizes___presentationWidth'
  | 'content_images___childImageSharp___sizes___presentationHeight'
  | 'content_images___childImageSharp___original___width'
  | 'content_images___childImageSharp___original___height'
  | 'content_images___childImageSharp___original___src'
  | 'content_images___childImageSharp___resize___src'
  | 'content_images___childImageSharp___resize___tracedSVG'
  | 'content_images___childImageSharp___resize___width'
  | 'content_images___childImageSharp___resize___height'
  | 'content_images___childImageSharp___resize___aspectRatio'
  | 'content_images___childImageSharp___resize___originalName'
  | 'content_images___childImageSharp___id'
  | 'content_images___childImageSharp___parent___id'
  | 'content_images___childImageSharp___parent___children'
  | 'content_images___childImageSharp___children'
  | 'content_images___childImageSharp___children___id'
  | 'content_images___childImageSharp___children___children'
  | 'content_images___childImageSharp___internal___content'
  | 'content_images___childImageSharp___internal___contentDigest'
  | 'content_images___childImageSharp___internal___description'
  | 'content_images___childImageSharp___internal___fieldOwners'
  | 'content_images___childImageSharp___internal___ignoreType'
  | 'content_images___childImageSharp___internal___mediaType'
  | 'content_images___childImageSharp___internal___owner'
  | 'content_images___childImageSharp___internal___type'
  | 'content_images___id'
  | 'content_images___parent___id'
  | 'content_images___parent___parent___id'
  | 'content_images___parent___parent___children'
  | 'content_images___parent___children'
  | 'content_images___parent___children___id'
  | 'content_images___parent___children___children'
  | 'content_images___parent___internal___content'
  | 'content_images___parent___internal___contentDigest'
  | 'content_images___parent___internal___description'
  | 'content_images___parent___internal___fieldOwners'
  | 'content_images___parent___internal___ignoreType'
  | 'content_images___parent___internal___mediaType'
  | 'content_images___parent___internal___owner'
  | 'content_images___parent___internal___type'
  | 'content_images___children'
  | 'content_images___children___id'
  | 'content_images___children___parent___id'
  | 'content_images___children___parent___children'
  | 'content_images___children___children'
  | 'content_images___children___children___id'
  | 'content_images___children___children___children'
  | 'content_images___children___internal___content'
  | 'content_images___children___internal___contentDigest'
  | 'content_images___children___internal___description'
  | 'content_images___children___internal___fieldOwners'
  | 'content_images___children___internal___ignoreType'
  | 'content_images___children___internal___mediaType'
  | 'content_images___children___internal___owner'
  | 'content_images___children___internal___type'
  | 'content_images___internal___content'
  | 'content_images___internal___contentDigest'
  | 'content_images___internal___description'
  | 'content_images___internal___fieldOwners'
  | 'content_images___internal___ignoreType'
  | 'content_images___internal___mediaType'
  | 'content_images___internal___owner'
  | 'content_images___internal___type'
  | 'strapiId';

export type StrapiPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  image?: Maybe<FileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiPageCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiPageUpdated_ByFilterInput>;
  content_images?: Maybe<FileFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiPageEdge>;
  nodes: Array<StrapiPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiPageSortInput = {
  fields?: Maybe<Array<Maybe<StrapiPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiPageUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiPageUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiPageUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiPageUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSidebar = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  created_by?: Maybe<StrapiSidebarCreated_By>;
  updated_by?: Maybe<StrapiSidebarUpdated_By>;
  content_images?: Maybe<Array<Maybe<File>>>;
  strapiId?: Maybe<Scalars['String']>;
};


export type StrapiSidebarCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSidebarUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSidebarConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiSidebarEdge>;
  nodes: Array<StrapiSidebar>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiSidebarGroupConnection>;
};


export type StrapiSidebarConnectionDistinctArgs = {
  field: StrapiSidebarFieldsEnum;
};


export type StrapiSidebarConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiSidebarFieldsEnum;
};

export type StrapiSidebarCreated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSidebarCreated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSidebarCreated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSidebarCreated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSidebarEdge = {
  next?: Maybe<StrapiSidebar>;
  node: StrapiSidebar;
  previous?: Maybe<StrapiSidebar>;
};

export type StrapiSidebarFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'createdAt'
  | 'updatedAt'
  | 'created_by___firstname'
  | 'created_by___lastname'
  | 'created_by___createdAt'
  | 'created_by___updatedAt'
  | 'created_by___id'
  | 'updated_by___firstname'
  | 'updated_by___lastname'
  | 'updated_by___createdAt'
  | 'updated_by___updatedAt'
  | 'updated_by___id'
  | 'content_images'
  | 'content_images___sourceInstanceName'
  | 'content_images___absolutePath'
  | 'content_images___relativePath'
  | 'content_images___extension'
  | 'content_images___size'
  | 'content_images___prettySize'
  | 'content_images___modifiedTime'
  | 'content_images___accessTime'
  | 'content_images___changeTime'
  | 'content_images___birthTime'
  | 'content_images___root'
  | 'content_images___dir'
  | 'content_images___base'
  | 'content_images___ext'
  | 'content_images___name'
  | 'content_images___relativeDirectory'
  | 'content_images___dev'
  | 'content_images___mode'
  | 'content_images___nlink'
  | 'content_images___uid'
  | 'content_images___gid'
  | 'content_images___rdev'
  | 'content_images___ino'
  | 'content_images___atimeMs'
  | 'content_images___mtimeMs'
  | 'content_images___ctimeMs'
  | 'content_images___atime'
  | 'content_images___mtime'
  | 'content_images___ctime'
  | 'content_images___birthtime'
  | 'content_images___birthtimeMs'
  | 'content_images___blksize'
  | 'content_images___blocks'
  | 'content_images___publicURL'
  | 'content_images___childImageSharp___fixed___base64'
  | 'content_images___childImageSharp___fixed___tracedSVG'
  | 'content_images___childImageSharp___fixed___aspectRatio'
  | 'content_images___childImageSharp___fixed___width'
  | 'content_images___childImageSharp___fixed___height'
  | 'content_images___childImageSharp___fixed___src'
  | 'content_images___childImageSharp___fixed___srcSet'
  | 'content_images___childImageSharp___fixed___srcWebp'
  | 'content_images___childImageSharp___fixed___srcSetWebp'
  | 'content_images___childImageSharp___fixed___originalName'
  | 'content_images___childImageSharp___resolutions___base64'
  | 'content_images___childImageSharp___resolutions___tracedSVG'
  | 'content_images___childImageSharp___resolutions___aspectRatio'
  | 'content_images___childImageSharp___resolutions___width'
  | 'content_images___childImageSharp___resolutions___height'
  | 'content_images___childImageSharp___resolutions___src'
  | 'content_images___childImageSharp___resolutions___srcSet'
  | 'content_images___childImageSharp___resolutions___srcWebp'
  | 'content_images___childImageSharp___resolutions___srcSetWebp'
  | 'content_images___childImageSharp___resolutions___originalName'
  | 'content_images___childImageSharp___fluid___base64'
  | 'content_images___childImageSharp___fluid___tracedSVG'
  | 'content_images___childImageSharp___fluid___aspectRatio'
  | 'content_images___childImageSharp___fluid___src'
  | 'content_images___childImageSharp___fluid___srcSet'
  | 'content_images___childImageSharp___fluid___srcWebp'
  | 'content_images___childImageSharp___fluid___srcSetWebp'
  | 'content_images___childImageSharp___fluid___sizes'
  | 'content_images___childImageSharp___fluid___originalImg'
  | 'content_images___childImageSharp___fluid___originalName'
  | 'content_images___childImageSharp___fluid___presentationWidth'
  | 'content_images___childImageSharp___fluid___presentationHeight'
  | 'content_images___childImageSharp___sizes___base64'
  | 'content_images___childImageSharp___sizes___tracedSVG'
  | 'content_images___childImageSharp___sizes___aspectRatio'
  | 'content_images___childImageSharp___sizes___src'
  | 'content_images___childImageSharp___sizes___srcSet'
  | 'content_images___childImageSharp___sizes___srcWebp'
  | 'content_images___childImageSharp___sizes___srcSetWebp'
  | 'content_images___childImageSharp___sizes___sizes'
  | 'content_images___childImageSharp___sizes___originalImg'
  | 'content_images___childImageSharp___sizes___originalName'
  | 'content_images___childImageSharp___sizes___presentationWidth'
  | 'content_images___childImageSharp___sizes___presentationHeight'
  | 'content_images___childImageSharp___original___width'
  | 'content_images___childImageSharp___original___height'
  | 'content_images___childImageSharp___original___src'
  | 'content_images___childImageSharp___resize___src'
  | 'content_images___childImageSharp___resize___tracedSVG'
  | 'content_images___childImageSharp___resize___width'
  | 'content_images___childImageSharp___resize___height'
  | 'content_images___childImageSharp___resize___aspectRatio'
  | 'content_images___childImageSharp___resize___originalName'
  | 'content_images___childImageSharp___id'
  | 'content_images___childImageSharp___parent___id'
  | 'content_images___childImageSharp___parent___children'
  | 'content_images___childImageSharp___children'
  | 'content_images___childImageSharp___children___id'
  | 'content_images___childImageSharp___children___children'
  | 'content_images___childImageSharp___internal___content'
  | 'content_images___childImageSharp___internal___contentDigest'
  | 'content_images___childImageSharp___internal___description'
  | 'content_images___childImageSharp___internal___fieldOwners'
  | 'content_images___childImageSharp___internal___ignoreType'
  | 'content_images___childImageSharp___internal___mediaType'
  | 'content_images___childImageSharp___internal___owner'
  | 'content_images___childImageSharp___internal___type'
  | 'content_images___id'
  | 'content_images___parent___id'
  | 'content_images___parent___parent___id'
  | 'content_images___parent___parent___children'
  | 'content_images___parent___children'
  | 'content_images___parent___children___id'
  | 'content_images___parent___children___children'
  | 'content_images___parent___internal___content'
  | 'content_images___parent___internal___contentDigest'
  | 'content_images___parent___internal___description'
  | 'content_images___parent___internal___fieldOwners'
  | 'content_images___parent___internal___ignoreType'
  | 'content_images___parent___internal___mediaType'
  | 'content_images___parent___internal___owner'
  | 'content_images___parent___internal___type'
  | 'content_images___children'
  | 'content_images___children___id'
  | 'content_images___children___parent___id'
  | 'content_images___children___parent___children'
  | 'content_images___children___children'
  | 'content_images___children___children___id'
  | 'content_images___children___children___children'
  | 'content_images___children___internal___content'
  | 'content_images___children___internal___contentDigest'
  | 'content_images___children___internal___description'
  | 'content_images___children___internal___fieldOwners'
  | 'content_images___children___internal___ignoreType'
  | 'content_images___children___internal___mediaType'
  | 'content_images___children___internal___owner'
  | 'content_images___children___internal___type'
  | 'content_images___internal___content'
  | 'content_images___internal___contentDigest'
  | 'content_images___internal___description'
  | 'content_images___internal___fieldOwners'
  | 'content_images___internal___ignoreType'
  | 'content_images___internal___mediaType'
  | 'content_images___internal___owner'
  | 'content_images___internal___type'
  | 'strapiId';

export type StrapiSidebarFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  created_by?: Maybe<StrapiSidebarCreated_ByFilterInput>;
  updated_by?: Maybe<StrapiSidebarUpdated_ByFilterInput>;
  content_images?: Maybe<FileFilterListInput>;
  strapiId?: Maybe<StringQueryOperatorInput>;
};

export type StrapiSidebarGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StrapiSidebarEdge>;
  nodes: Array<StrapiSidebar>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiSidebarSortInput = {
  fields?: Maybe<Array<Maybe<StrapiSidebarFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiSidebarUpdated_By = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
};


export type StrapiSidebarUpdated_ByCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiSidebarUpdated_ByUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiSidebarUpdated_ByFilterInput = {
  firstname?: Maybe<StringQueryOperatorInput>;
  lastname?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { categories: { edges: Array<{ node: Pick<StrapiCategory, 'strapiId' | 'name'> }> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'github' | 'twitter'>> }> };

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { pages: { edges: Array<{ node: Pick<StrapiPage, 'strapiId' | 'title'> }> } };

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_6_Query = { sidebars: { edges: Array<{ node: (
        Pick<StrapiSidebar, 'content'>
        & { content_images?: Maybe<Array<Maybe<(
          Pick<File, 'base'>
          & { childImageSharp?: Maybe<{ original?: Maybe<Pick<ImageSharpOriginal, 'src'>>, fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes' | 'presentationWidth' | 'presentationHeight'>> }> }
        )>>> }
      ) }> } };

export type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_7_Query = { allArticle: { edges: Array<{ node: (
        Pick<Article, 'strapiId' | 'title' | 'published_at'>
        & { category?: Maybe<Pick<ArticleCategory, 'id' | 'name'>>, image?: Maybe<Pick<File, 'publicURL'>>, childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'excerpt'>> }
      ) }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'concept'>> }> };

export type ArticleQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ArticleQueryQuery = { article?: Maybe<(
    Pick<Article, 'strapiId' | 'title' | 'content' | 'published_at'>
    & { content_images?: Maybe<Array<Maybe<(
      Pick<File, 'base'>
      & { childImageSharp?: Maybe<{ original?: Maybe<Pick<ImageSharpOriginal, 'src'>>, fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>> }> }
    )>>>, image?: Maybe<Pick<File, 'publicURL'>> }
  )> };

export type CategoryQueryVariables = Exact<{
  id: Scalars['String'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type CategoryQuery = { articles: { edges: Array<{ node: (
        Pick<Article, 'strapiId' | 'title' | 'published_at'>
        & { category?: Maybe<Pick<ArticleCategory, 'id' | 'name'>>, childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'excerpt'>>, image?: Maybe<Pick<File, 'publicURL'>> }
      ) }> }, category?: Maybe<Pick<StrapiCategory, 'name'>> };

export type Unnamed_8_QueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type Unnamed_8_Query = { allArticle: { edges: Array<{ node: (
        Pick<Article, 'strapiId' | 'title' | 'published_at'>
        & { category?: Maybe<Pick<ArticleCategory, 'id' | 'name'>>, image?: Maybe<Pick<File, 'publicURL'>>, childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'excerpt'>> }
      ) }> }, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'concept'>> }> };

export type PageQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageQueryQuery = { strapiPage?: Maybe<(
    Pick<StrapiPage, 'strapiId' | 'title' | 'content'>
    & { content_images?: Maybe<Array<Maybe<(
      Pick<File, 'base'>
      & { childImageSharp?: Maybe<{ original?: Maybe<Pick<ImageSharpOriginal, 'src'>>, fluid?: Maybe<Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>> }> }
    )>>>, image?: Maybe<Pick<File, 'publicURL'>> }
  )> };
