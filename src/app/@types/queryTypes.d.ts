/* tslint:disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  banner?: Maybe<Banner>;
  banners?: Maybe<Array<Maybe<Banner>>>;
  bannersConnection?: Maybe<BannerConnection>;
  box?: Maybe<Box>;
  boxes?: Maybe<Array<Maybe<Box>>>;
  boxesConnection?: Maybe<BoxConnection>;
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  itemsConnection?: Maybe<ItemConnection>;
  material?: Maybe<Material>;
  materials?: Maybe<Array<Maybe<Material>>>;
  materialsConnection?: Maybe<MaterialConnection>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsConnection?: Maybe<ProductConnection>;
  tag?: Maybe<Tags>;
  tags?: Maybe<Array<Maybe<Tags>>>;
  tagsConnection?: Maybe<TagsConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryBannerArgs = {
  id: Scalars['ID'];
};


export type QueryBannersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBannersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBoxArgs = {
  id: Scalars['ID'];
};


export type QueryBoxesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBoxesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};


export type QueryItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMaterialArgs = {
  id: Scalars['ID'];
};


export type QueryMaterialsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMaterialsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTagsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Banner = {
  __typename?: 'Banner';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  info?: Maybe<ComponentInfoInfo>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  tags?: Maybe<Array<Maybe<Tags>>>;
};


export type BannerTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ComponentInfoInfo = {
  __typename?: 'ComponentInfoInfo';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentInfoInfoImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Banner | BannerConnection | BannerAggregator | BannerGroupBy | BannerConnectionId | BannerConnectionCreated_At | BannerConnectionUpdated_At | BannerConnectionInfo | BannerConnectionCreated_By | BannerConnectionUpdated_By | CreateBannerPayload | UpdateBannerPayload | DeleteBannerPayload | Box | BoxConnection | BoxAggregator | BoxAggregatorSum | BoxAggregatorAvg | BoxAggregatorMin | BoxAggregatorMax | BoxGroupBy | BoxConnectionId | BoxConnectionCreated_At | BoxConnectionUpdated_At | BoxConnectionInfo | BoxConnectionCountmin | BoxConnectionCountmax | BoxConnectionPrice | BoxConnectionDimensions | BoxConnectionFlags | BoxConnectionCreated_By | BoxConnectionUpdated_By | CreateBoxPayload | UpdateBoxPayload | DeleteBoxPayload | Item | ItemConnection | ItemAggregator | ItemGroupBy | ItemConnectionId | ItemConnectionCreated_At | ItemConnectionUpdated_At | ItemConnectionInfo | ItemConnectionDimensions | ItemConnectionPrice | ItemConnectionFlags | ItemConnectionCreated_By | ItemConnectionUpdated_By | CreateItemPayload | UpdateItemPayload | DeleteItemPayload | Material | MaterialConnection | MaterialAggregator | MaterialGroupBy | MaterialConnectionId | MaterialConnectionCreated_At | MaterialConnectionUpdated_At | MaterialConnectionInfo | MaterialConnectionCreated_By | MaterialConnectionUpdated_By | CreateMaterialPayload | UpdateMaterialPayload | DeleteMaterialPayload | Product | ProductConnection | ProductAggregator | ProductGroupBy | ProductConnectionId | ProductConnectionCreated_At | ProductConnectionUpdated_At | ProductConnectionInfo | ProductConnectionDimensions | ProductConnectionPrice | ProductConnectionBox | ProductConnectionFlags | ProductConnectionCreated_By | ProductConnectionUpdated_By | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | Tags | TagsConnection | TagsAggregator | TagsGroupBy | TagsConnectionId | TagsConnectionCreated_At | TagsConnectionUpdated_At | TagsConnectionInfo | TagsConnectionCreated_By | TagsConnectionUpdated_By | CreateTagPayload | UpdateTagPayload | DeleteTagPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionSocial_Photo_Url | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentBundleItem | ComponentDimensionsDimensions | ComponentInfoFlags | ComponentInfoInfo | ComponentPricePrice;

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type BannerConnection = {
  __typename?: 'BannerConnection';
  values?: Maybe<Array<Maybe<Banner>>>;
  groupBy?: Maybe<BannerGroupBy>;
  aggregate?: Maybe<BannerAggregator>;
};

export type BannerGroupBy = {
  __typename?: 'BannerGroupBy';
  id?: Maybe<Array<Maybe<BannerConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BannerConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BannerConnectionUpdated_At>>>;
  info?: Maybe<Array<Maybe<BannerConnectionInfo>>>;
  created_by?: Maybe<Array<Maybe<BannerConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<BannerConnectionUpdated_By>>>;
};

export type BannerConnectionId = {
  __typename?: 'BannerConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BannerConnection>;
};

export type BannerConnectionCreated_At = {
  __typename?: 'BannerConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BannerConnection>;
};

export type BannerConnectionUpdated_At = {
  __typename?: 'BannerConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BannerConnection>;
};

export type BannerConnectionInfo = {
  __typename?: 'BannerConnectionInfo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BannerConnection>;
};

export type BannerConnectionCreated_By = {
  __typename?: 'BannerConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BannerConnection>;
};

export type BannerConnectionUpdated_By = {
  __typename?: 'BannerConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BannerConnection>;
};

export type BannerAggregator = {
  __typename?: 'BannerAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateBannerPayload = {
  __typename?: 'createBannerPayload';
  banner?: Maybe<Banner>;
};

export type UpdateBannerPayload = {
  __typename?: 'updateBannerPayload';
  banner?: Maybe<Banner>;
};

export type DeleteBannerPayload = {
  __typename?: 'deleteBannerPayload';
  banner?: Maybe<Banner>;
};

export type Box = {
  __typename?: 'Box';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  info?: Maybe<ComponentInfoInfo>;
  countmin?: Maybe<Scalars['Int']>;
  countmax?: Maybe<Scalars['Int']>;
  price?: Maybe<ComponentPricePrice>;
  dimensions?: Maybe<ComponentDimensionsDimensions>;
  flags?: Maybe<ComponentInfoFlags>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  tags?: Maybe<Array<Maybe<Tags>>>;
  products?: Maybe<Array<Maybe<Product>>>;
};


export type BoxTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type BoxProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentPricePrice = {
  __typename?: 'ComponentPricePrice';
  id: Scalars['ID'];
  overall?: Maybe<Scalars['Int']>;
  base_price?: Maybe<Scalars['Int']>;
  additional?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['String']>;
};

export type ComponentDimensionsDimensions = {
  __typename?: 'ComponentDimensionsDimensions';
  id: Scalars['ID'];
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  breadth?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ComponentInfoFlags = {
  __typename?: 'ComponentInfoFlags';
  id: Scalars['ID'];
  is_available_in_constructor?: Maybe<Scalars['Boolean']>;
  is_editable?: Maybe<Scalars['Boolean']>;
};

export type Tags = {
  __typename?: 'Tags';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  info?: Maybe<ComponentInfoInfo>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  items?: Maybe<Array<Maybe<Item>>>;
  boxes?: Maybe<Array<Maybe<Box>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  banners?: Maybe<Array<Maybe<Banner>>>;
};


export type TagsItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TagsBoxesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TagsProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type TagsBannersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  info?: Maybe<ComponentInfoInfo>;
  dimensions?: Maybe<ComponentDimensionsDimensions>;
  price?: Maybe<ComponentPricePrice>;
  flags?: Maybe<ComponentInfoFlags>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  tags?: Maybe<Array<Maybe<Tags>>>;
  materials?: Maybe<Array<Maybe<Material>>>;
};


export type ItemTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ItemMaterialsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Material = {
  __typename?: 'Material';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  info?: Maybe<ComponentInfoInfo>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  items?: Maybe<Array<Maybe<Item>>>;
};


export type MaterialItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  info?: Maybe<ComponentInfoInfo>;
  dimensions?: Maybe<ComponentDimensionsDimensions>;
  price?: Maybe<ComponentPricePrice>;
  box?: Maybe<Box>;
  bundle?: Maybe<Array<Maybe<ComponentBundleItem>>>;
  flags?: Maybe<ComponentInfoFlags>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  tags?: Maybe<Array<Maybe<Tags>>>;
};


export type ProductTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentBundleItem = {
  __typename?: 'ComponentBundleItem';
  id: Scalars['ID'];
  item?: Maybe<Item>;
  letter?: Maybe<Scalars['String']>;
};

export type BoxConnection = {
  __typename?: 'BoxConnection';
  values?: Maybe<Array<Maybe<Box>>>;
  groupBy?: Maybe<BoxGroupBy>;
  aggregate?: Maybe<BoxAggregator>;
};

export type BoxGroupBy = {
  __typename?: 'BoxGroupBy';
  id?: Maybe<Array<Maybe<BoxConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BoxConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BoxConnectionUpdated_At>>>;
  info?: Maybe<Array<Maybe<BoxConnectionInfo>>>;
  countmin?: Maybe<Array<Maybe<BoxConnectionCountmin>>>;
  countmax?: Maybe<Array<Maybe<BoxConnectionCountmax>>>;
  price?: Maybe<Array<Maybe<BoxConnectionPrice>>>;
  dimensions?: Maybe<Array<Maybe<BoxConnectionDimensions>>>;
  flags?: Maybe<Array<Maybe<BoxConnectionFlags>>>;
  created_by?: Maybe<Array<Maybe<BoxConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<BoxConnectionUpdated_By>>>;
};

export type BoxConnectionId = {
  __typename?: 'BoxConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionCreated_At = {
  __typename?: 'BoxConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionUpdated_At = {
  __typename?: 'BoxConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionInfo = {
  __typename?: 'BoxConnectionInfo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionCountmin = {
  __typename?: 'BoxConnectionCountmin';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionCountmax = {
  __typename?: 'BoxConnectionCountmax';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionPrice = {
  __typename?: 'BoxConnectionPrice';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionDimensions = {
  __typename?: 'BoxConnectionDimensions';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionFlags = {
  __typename?: 'BoxConnectionFlags';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionCreated_By = {
  __typename?: 'BoxConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxConnectionUpdated_By = {
  __typename?: 'BoxConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoxConnection>;
};

export type BoxAggregator = {
  __typename?: 'BoxAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<BoxAggregatorSum>;
  avg?: Maybe<BoxAggregatorAvg>;
  min?: Maybe<BoxAggregatorMin>;
  max?: Maybe<BoxAggregatorMax>;
};

export type BoxAggregatorSum = {
  __typename?: 'BoxAggregatorSum';
  countmin?: Maybe<Scalars['Float']>;
  countmax?: Maybe<Scalars['Float']>;
};

export type BoxAggregatorAvg = {
  __typename?: 'BoxAggregatorAvg';
  countmin?: Maybe<Scalars['Float']>;
  countmax?: Maybe<Scalars['Float']>;
};

export type BoxAggregatorMin = {
  __typename?: 'BoxAggregatorMin';
  countmin?: Maybe<Scalars['Float']>;
  countmax?: Maybe<Scalars['Float']>;
};

export type BoxAggregatorMax = {
  __typename?: 'BoxAggregatorMax';
  countmin?: Maybe<Scalars['Float']>;
  countmax?: Maybe<Scalars['Float']>;
};

export type CreateBoxPayload = {
  __typename?: 'createBoxPayload';
  box?: Maybe<Box>;
};

export type UpdateBoxPayload = {
  __typename?: 'updateBoxPayload';
  box?: Maybe<Box>;
};

export type DeleteBoxPayload = {
  __typename?: 'deleteBoxPayload';
  box?: Maybe<Box>;
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  values?: Maybe<Array<Maybe<Item>>>;
  groupBy?: Maybe<ItemGroupBy>;
  aggregate?: Maybe<ItemAggregator>;
};

export type ItemGroupBy = {
  __typename?: 'ItemGroupBy';
  id?: Maybe<Array<Maybe<ItemConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ItemConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ItemConnectionUpdated_At>>>;
  info?: Maybe<Array<Maybe<ItemConnectionInfo>>>;
  dimensions?: Maybe<Array<Maybe<ItemConnectionDimensions>>>;
  price?: Maybe<Array<Maybe<ItemConnectionPrice>>>;
  flags?: Maybe<Array<Maybe<ItemConnectionFlags>>>;
  created_by?: Maybe<Array<Maybe<ItemConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ItemConnectionUpdated_By>>>;
};

export type ItemConnectionId = {
  __typename?: 'ItemConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionCreated_At = {
  __typename?: 'ItemConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionUpdated_At = {
  __typename?: 'ItemConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionInfo = {
  __typename?: 'ItemConnectionInfo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionDimensions = {
  __typename?: 'ItemConnectionDimensions';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionPrice = {
  __typename?: 'ItemConnectionPrice';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionFlags = {
  __typename?: 'ItemConnectionFlags';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionCreated_By = {
  __typename?: 'ItemConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemConnectionUpdated_By = {
  __typename?: 'ItemConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ItemConnection>;
};

export type ItemAggregator = {
  __typename?: 'ItemAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateItemPayload = {
  __typename?: 'createItemPayload';
  item?: Maybe<Item>;
};

export type UpdateItemPayload = {
  __typename?: 'updateItemPayload';
  item?: Maybe<Item>;
};

export type DeleteItemPayload = {
  __typename?: 'deleteItemPayload';
  item?: Maybe<Item>;
};

export type MaterialConnection = {
  __typename?: 'MaterialConnection';
  values?: Maybe<Array<Maybe<Material>>>;
  groupBy?: Maybe<MaterialGroupBy>;
  aggregate?: Maybe<MaterialAggregator>;
};

export type MaterialGroupBy = {
  __typename?: 'MaterialGroupBy';
  id?: Maybe<Array<Maybe<MaterialConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MaterialConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MaterialConnectionUpdated_At>>>;
  info?: Maybe<Array<Maybe<MaterialConnectionInfo>>>;
  created_by?: Maybe<Array<Maybe<MaterialConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<MaterialConnectionUpdated_By>>>;
};

export type MaterialConnectionId = {
  __typename?: 'MaterialConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MaterialConnection>;
};

export type MaterialConnectionCreated_At = {
  __typename?: 'MaterialConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MaterialConnection>;
};

export type MaterialConnectionUpdated_At = {
  __typename?: 'MaterialConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MaterialConnection>;
};

export type MaterialConnectionInfo = {
  __typename?: 'MaterialConnectionInfo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MaterialConnection>;
};

export type MaterialConnectionCreated_By = {
  __typename?: 'MaterialConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MaterialConnection>;
};

export type MaterialConnectionUpdated_By = {
  __typename?: 'MaterialConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MaterialConnection>;
};

export type MaterialAggregator = {
  __typename?: 'MaterialAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateMaterialPayload = {
  __typename?: 'createMaterialPayload';
  material?: Maybe<Material>;
};

export type UpdateMaterialPayload = {
  __typename?: 'updateMaterialPayload';
  material?: Maybe<Material>;
};

export type DeleteMaterialPayload = {
  __typename?: 'deleteMaterialPayload';
  material?: Maybe<Material>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  values?: Maybe<Array<Maybe<Product>>>;
  groupBy?: Maybe<ProductGroupBy>;
  aggregate?: Maybe<ProductAggregator>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  id?: Maybe<Array<Maybe<ProductConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductConnectionUpdated_At>>>;
  info?: Maybe<Array<Maybe<ProductConnectionInfo>>>;
  dimensions?: Maybe<Array<Maybe<ProductConnectionDimensions>>>;
  price?: Maybe<Array<Maybe<ProductConnectionPrice>>>;
  box?: Maybe<Array<Maybe<ProductConnectionBox>>>;
  flags?: Maybe<Array<Maybe<ProductConnectionFlags>>>;
  created_by?: Maybe<Array<Maybe<ProductConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ProductConnectionUpdated_By>>>;
};

export type ProductConnectionId = {
  __typename?: 'ProductConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionCreated_At = {
  __typename?: 'ProductConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionUpdated_At = {
  __typename?: 'ProductConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionInfo = {
  __typename?: 'ProductConnectionInfo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionDimensions = {
  __typename?: 'ProductConnectionDimensions';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionPrice = {
  __typename?: 'ProductConnectionPrice';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionBox = {
  __typename?: 'ProductConnectionBox';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionFlags = {
  __typename?: 'ProductConnectionFlags';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionCreated_By = {
  __typename?: 'ProductConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductConnectionUpdated_By = {
  __typename?: 'ProductConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductConnection>;
};

export type ProductAggregator = {
  __typename?: 'ProductAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Product>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Product>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Product>;
};

export type TagsConnection = {
  __typename?: 'TagsConnection';
  values?: Maybe<Array<Maybe<Tags>>>;
  groupBy?: Maybe<TagsGroupBy>;
  aggregate?: Maybe<TagsAggregator>;
};

export type TagsGroupBy = {
  __typename?: 'TagsGroupBy';
  id?: Maybe<Array<Maybe<TagsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TagsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TagsConnectionUpdated_At>>>;
  info?: Maybe<Array<Maybe<TagsConnectionInfo>>>;
  created_by?: Maybe<Array<Maybe<TagsConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<TagsConnectionUpdated_By>>>;
};

export type TagsConnectionId = {
  __typename?: 'TagsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TagsConnection>;
};

export type TagsConnectionCreated_At = {
  __typename?: 'TagsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagsConnection>;
};

export type TagsConnectionUpdated_At = {
  __typename?: 'TagsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagsConnection>;
};

export type TagsConnectionInfo = {
  __typename?: 'TagsConnectionInfo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TagsConnection>;
};

export type TagsConnectionCreated_By = {
  __typename?: 'TagsConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TagsConnection>;
};

export type TagsConnectionUpdated_By = {
  __typename?: 'TagsConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TagsConnection>;
};

export type TagsAggregator = {
  __typename?: 'TagsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateTagPayload = {
  __typename?: 'createTagPayload';
  tag?: Maybe<Tags>;
};

export type UpdateTagPayload = {
  __typename?: 'updateTagPayload';
  tag?: Maybe<Tags>;
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  tag?: Maybe<Tags>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  social_photo_url?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  social_photo_url?: Maybe<Array<Maybe<UsersPermissionsUserConnectionSocial_Photo_Url>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionSocial_Photo_Url = {
  __typename?: 'UsersPermissionsUserConnectionSocial_photo_url';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBanner?: Maybe<CreateBannerPayload>;
  updateBanner?: Maybe<UpdateBannerPayload>;
  deleteBanner?: Maybe<DeleteBannerPayload>;
  createBox?: Maybe<CreateBoxPayload>;
  updateBox?: Maybe<UpdateBoxPayload>;
  deleteBox?: Maybe<DeleteBoxPayload>;
  createItem?: Maybe<CreateItemPayload>;
  updateItem?: Maybe<UpdateItemPayload>;
  deleteItem?: Maybe<DeleteItemPayload>;
  createMaterial?: Maybe<CreateMaterialPayload>;
  updateMaterial?: Maybe<UpdateMaterialPayload>;
  deleteMaterial?: Maybe<DeleteMaterialPayload>;
  createProduct?: Maybe<CreateProductPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  createTag?: Maybe<CreateTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateBannerArgs = {
  input?: Maybe<CreateBannerInput>;
};


export type MutationUpdateBannerArgs = {
  input?: Maybe<UpdateBannerInput>;
};


export type MutationDeleteBannerArgs = {
  input?: Maybe<DeleteBannerInput>;
};


export type MutationCreateBoxArgs = {
  input?: Maybe<CreateBoxInput>;
};


export type MutationUpdateBoxArgs = {
  input?: Maybe<UpdateBoxInput>;
};


export type MutationDeleteBoxArgs = {
  input?: Maybe<DeleteBoxInput>;
};


export type MutationCreateItemArgs = {
  input?: Maybe<CreateItemInput>;
};


export type MutationUpdateItemArgs = {
  input?: Maybe<UpdateItemInput>;
};


export type MutationDeleteItemArgs = {
  input?: Maybe<DeleteItemInput>;
};


export type MutationCreateMaterialArgs = {
  input?: Maybe<CreateMaterialInput>;
};


export type MutationUpdateMaterialArgs = {
  input?: Maybe<UpdateMaterialInput>;
};


export type MutationDeleteMaterialArgs = {
  input?: Maybe<DeleteMaterialInput>;
};


export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>;
};


export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>;
};


export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>;
};


export type MutationCreateTagArgs = {
  input?: Maybe<CreateTagInput>;
};


export type MutationUpdateTagArgs = {
  input?: Maybe<UpdateTagInput>;
};


export type MutationDeleteTagArgs = {
  input?: Maybe<DeleteTagInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type CreateBannerInput = {
  data?: Maybe<BannerInput>;
};

export type BannerInput = {
  info?: Maybe<ComponentInfoInfoInput>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentInfoInfoInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UpdateBannerInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBannerInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditBannerInput = {
  info?: Maybe<EditComponentInfoInfoInput>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentInfoInfoInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type DeleteBannerInput = {
  where?: Maybe<InputId>;
};

export type CreateBoxInput = {
  data?: Maybe<BoxInput>;
};

export type BoxInput = {
  info?: Maybe<ComponentInfoInfoInput>;
  countmin?: Maybe<Scalars['Int']>;
  countmax?: Maybe<Scalars['Int']>;
  price?: Maybe<ComponentPricePriceInput>;
  dimensions?: Maybe<ComponentDimensionsDimensionInput>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  flags?: Maybe<ComponentInfoFlagInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentPricePriceInput = {
  overall?: Maybe<Scalars['Int']>;
  base_price?: Maybe<Scalars['Int']>;
  additional?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['String']>;
};

export type ComponentDimensionsDimensionInput = {
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  breadth?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ComponentInfoFlagInput = {
  is_available_in_constructor?: Maybe<Scalars['Boolean']>;
  is_editable?: Maybe<Scalars['Boolean']>;
};

export type UpdateBoxInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBoxInput>;
};

export type EditBoxInput = {
  info?: Maybe<EditComponentInfoInfoInput>;
  countmin?: Maybe<Scalars['Int']>;
  countmax?: Maybe<Scalars['Int']>;
  price?: Maybe<EditComponentPricePriceInput>;
  dimensions?: Maybe<EditComponentDimensionsDimensionInput>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  flags?: Maybe<EditComponentInfoFlagInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentPricePriceInput = {
  id?: Maybe<Scalars['ID']>;
  overall?: Maybe<Scalars['Int']>;
  base_price?: Maybe<Scalars['Int']>;
  additional?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['String']>;
};

export type EditComponentDimensionsDimensionInput = {
  id?: Maybe<Scalars['ID']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  breadth?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type EditComponentInfoFlagInput = {
  id?: Maybe<Scalars['ID']>;
  is_available_in_constructor?: Maybe<Scalars['Boolean']>;
  is_editable?: Maybe<Scalars['Boolean']>;
};

export type DeleteBoxInput = {
  where?: Maybe<InputId>;
};

export type CreateItemInput = {
  data?: Maybe<ItemInput>;
};

export type ItemInput = {
  info?: Maybe<ComponentInfoInfoInput>;
  dimensions?: Maybe<ComponentDimensionsDimensionInput>;
  price?: Maybe<ComponentPricePriceInput>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  materials?: Maybe<Array<Maybe<Scalars['ID']>>>;
  flags?: Maybe<ComponentInfoFlagInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateItemInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditItemInput>;
};

export type EditItemInput = {
  info?: Maybe<EditComponentInfoInfoInput>;
  dimensions?: Maybe<EditComponentDimensionsDimensionInput>;
  price?: Maybe<EditComponentPricePriceInput>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  materials?: Maybe<Array<Maybe<Scalars['ID']>>>;
  flags?: Maybe<EditComponentInfoFlagInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteItemInput = {
  where?: Maybe<InputId>;
};

export type CreateMaterialInput = {
  data?: Maybe<MaterialInput>;
};

export type MaterialInput = {
  info?: Maybe<ComponentInfoInfoInput>;
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateMaterialInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMaterialInput>;
};

export type EditMaterialInput = {
  info?: Maybe<EditComponentInfoInfoInput>;
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteMaterialInput = {
  where?: Maybe<InputId>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type ProductInput = {
  info?: Maybe<ComponentInfoInfoInput>;
  dimensions?: Maybe<ComponentDimensionsDimensionInput>;
  price?: Maybe<ComponentPricePriceInput>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  box?: Maybe<Scalars['ID']>;
  bundle?: Maybe<Array<ComponentBundleItemInput>>;
  flags?: Maybe<ComponentInfoFlagInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentBundleItemInput = {
  item?: Maybe<Scalars['ID']>;
  letter?: Maybe<Scalars['String']>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type EditProductInput = {
  info?: Maybe<EditComponentInfoInfoInput>;
  dimensions?: Maybe<EditComponentDimensionsDimensionInput>;
  price?: Maybe<EditComponentPricePriceInput>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  box?: Maybe<Scalars['ID']>;
  bundle?: Maybe<Array<Maybe<EditComponentBundleItemInput>>>;
  flags?: Maybe<EditComponentInfoFlagInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentBundleItemInput = {
  id?: Maybe<Scalars['ID']>;
  item?: Maybe<Scalars['ID']>;
  letter?: Maybe<Scalars['String']>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type CreateTagInput = {
  data?: Maybe<TagInput>;
};

export type TagInput = {
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  boxes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>;
  info?: Maybe<ComponentInfoInfoInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateTagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTagInput>;
};

export type EditTagInput = {
  items?: Maybe<Array<Maybe<Scalars['ID']>>>;
  boxes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
  banners?: Maybe<Array<Maybe<Scalars['ID']>>>;
  info?: Maybe<EditComponentInfoInfoInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteTagInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  social_photo_url?: Maybe<Scalars['String']>;
  personal_discount?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  social_photo_url?: Maybe<Scalars['String']>;
  personal_discount?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


