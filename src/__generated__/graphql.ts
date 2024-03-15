/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CalendarDay: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type CalendarDayNullableFilter = {
  equals?: InputMaybe<Scalars['CalendarDay']['input']>;
  gt?: InputMaybe<Scalars['CalendarDay']['input']>;
  gte?: InputMaybe<Scalars['CalendarDay']['input']>;
  in?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
  lt?: InputMaybe<Scalars['CalendarDay']['input']>;
  lte?: InputMaybe<Scalars['CalendarDay']['input']>;
  not?: InputMaybe<CalendarDayNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['CalendarDay']['input']>>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
};


export type CategoryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type CategoryProductsCountArgs = {
  where?: ProductWhereInput;
};

export type CategoryCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
};

export type CategoryOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type CategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
};

export type CategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryUpdateArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type City = {
  __typename?: 'City';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type CityCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CityManyRelationFilter = {
  every?: InputMaybe<CityWhereInput>;
  none?: InputMaybe<CityWhereInput>;
  some?: InputMaybe<CityWhereInput>;
};

export type CityOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type CityRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  create?: InputMaybe<Array<CityCreateInput>>;
};

export type CityRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  create?: InputMaybe<Array<CityCreateInput>>;
  disconnect?: InputMaybe<Array<CityWhereUniqueInput>>;
  set?: InputMaybe<Array<CityWhereUniqueInput>>;
};

export type CityUpdateArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};

export type CityUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CityWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Container = {
  __typename?: 'Container';
  capacity?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['CalendarDay']['output']>;
  id: Scalars['ID']['output'];
  inventoryItems?: Maybe<Array<InventoryItem>>;
  inventoryItemsCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  qty_due_in?: Maybe<Scalars['Int']['output']>;
  qty_sold?: Maybe<Scalars['Int']['output']>;
};


export type ContainerInventoryItemsArgs = {
  cursor?: InputMaybe<InventoryItemWhereUniqueInput>;
  orderBy?: Array<InventoryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InventoryItemWhereInput;
};


export type ContainerInventoryItemsCountArgs = {
  where?: InventoryItemWhereInput;
};

export type ContainerCreateInput = {
  capacity?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['CalendarDay']['input']>;
  inventoryItems?: InputMaybe<InventoryItemRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  qty_due_in?: InputMaybe<Scalars['Int']['input']>;
  qty_sold?: InputMaybe<Scalars['Int']['input']>;
};

export type ContainerItem = {
  __typename?: 'ContainerItem';
  container?: Maybe<Container>;
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  qty?: Maybe<Scalars['Int']['output']>;
};

export type ContainerItemCreateInput = {
  container?: InputMaybe<ContainerRelateToOneForCreateInput>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ContainerItemOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  qty?: InputMaybe<OrderDirection>;
};

export type ContainerItemUpdateArgs = {
  data: ContainerItemUpdateInput;
  where: ContainerItemWhereUniqueInput;
};

export type ContainerItemUpdateInput = {
  container?: InputMaybe<ContainerRelateToOneForUpdateInput>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type ContainerItemWhereInput = {
  AND?: InputMaybe<Array<ContainerItemWhereInput>>;
  NOT?: InputMaybe<Array<ContainerItemWhereInput>>;
  OR?: InputMaybe<Array<ContainerItemWhereInput>>;
  container?: InputMaybe<ContainerWhereInput>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductWhereInput>;
  qty?: InputMaybe<IntFilter>;
};

export type ContainerItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ContainerOrderByInput = {
  capacity?: InputMaybe<OrderDirection>;
  dueDate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  qty_due_in?: InputMaybe<OrderDirection>;
  qty_sold?: InputMaybe<OrderDirection>;
};

export type ContainerRelateToOneForCreateInput = {
  connect?: InputMaybe<ContainerWhereUniqueInput>;
  create?: InputMaybe<ContainerCreateInput>;
};

export type ContainerRelateToOneForUpdateInput = {
  connect?: InputMaybe<ContainerWhereUniqueInput>;
  create?: InputMaybe<ContainerCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContainerUpdateArgs = {
  data: ContainerUpdateInput;
  where: ContainerWhereUniqueInput;
};

export type ContainerUpdateInput = {
  capacity?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['CalendarDay']['input']>;
  inventoryItems?: InputMaybe<InventoryItemRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  qty_due_in?: InputMaybe<Scalars['Int']['input']>;
  qty_sold?: InputMaybe<Scalars['Int']['input']>;
};

export type ContainerWhereInput = {
  AND?: InputMaybe<Array<ContainerWhereInput>>;
  NOT?: InputMaybe<Array<ContainerWhereInput>>;
  OR?: InputMaybe<Array<ContainerWhereInput>>;
  capacity?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<CalendarDayNullableFilter>;
  id?: InputMaybe<IdFilter>;
  inventoryItems?: InputMaybe<InventoryItemManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  qty_due_in?: InputMaybe<IntNullableFilter>;
  qty_sold?: InputMaybe<IntNullableFilter>;
};

export type ContainerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  deliveryTax?: Maybe<Scalars['Decimal']['output']>;
  exchangeRate?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type CountryCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  deliveryTax?: InputMaybe<Scalars['Decimal']['input']>;
  exchangeRate?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CountryManyRelationFilter = {
  every?: InputMaybe<CountryWhereInput>;
  none?: InputMaybe<CountryWhereInput>;
  some?: InputMaybe<CountryWhereInput>;
};

export type CountryOrderByInput = {
  code?: InputMaybe<OrderDirection>;
  currency?: InputMaybe<OrderDirection>;
  deliveryTax?: InputMaybe<OrderDirection>;
  exchangeRate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type CountryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CountryWhereUniqueInput>>;
  create?: InputMaybe<Array<CountryCreateInput>>;
};

export type CountryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CountryWhereUniqueInput>>;
  create?: InputMaybe<Array<CountryCreateInput>>;
  disconnect?: InputMaybe<Array<CountryWhereUniqueInput>>;
  set?: InputMaybe<Array<CountryWhereUniqueInput>>;
};

export type CountryUpdateArgs = {
  data: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};

export type CountryUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  deliveryTax?: InputMaybe<Scalars['Decimal']['input']>;
  exchangeRate?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CountryWhereInput = {
  AND?: InputMaybe<Array<CountryWhereInput>>;
  NOT?: InputMaybe<Array<CountryWhereInput>>;
  OR?: InputMaybe<Array<CountryWhereInput>>;
  code?: InputMaybe<StringFilter>;
  currency?: InputMaybe<StringFilter>;
  deliveryTax?: InputMaybe<DecimalNullableFilter>;
  exchangeRate?: InputMaybe<DecimalNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CountryWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<DecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type DecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<DecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type DeliveryRate = {
  __typename?: 'DeliveryRate';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  zones?: Maybe<Array<DeliveryZone>>;
  zonesCount?: Maybe<Scalars['Int']['output']>;
};


export type DeliveryRateProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type DeliveryRateProductsCountArgs = {
  where?: ProductWhereInput;
};


export type DeliveryRateZonesArgs = {
  cursor?: InputMaybe<DeliveryZoneWhereUniqueInput>;
  orderBy?: Array<DeliveryZoneOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: DeliveryZoneWhereInput;
};


export type DeliveryRateZonesCountArgs = {
  where?: DeliveryZoneWhereInput;
};

export type DeliveryRateCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
  zones?: InputMaybe<DeliveryZoneRelateToManyForCreateInput>;
};

export type DeliveryRateOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type DeliveryRateUpdateArgs = {
  data: DeliveryRateUpdateInput;
  where: DeliveryRateWhereUniqueInput;
};

export type DeliveryRateUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
  zones?: InputMaybe<DeliveryZoneRelateToManyForUpdateInput>;
};

export type DeliveryRateWhereInput = {
  AND?: InputMaybe<Array<DeliveryRateWhereInput>>;
  NOT?: InputMaybe<Array<DeliveryRateWhereInput>>;
  OR?: InputMaybe<Array<DeliveryRateWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
  zones?: InputMaybe<DeliveryZoneManyRelationFilter>;
};

export type DeliveryRateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryZone = {
  __typename?: 'DeliveryZone';
  city?: Maybe<Array<City>>;
  cityCount?: Maybe<Scalars['Int']['output']>;
  countries?: Maybe<Array<Country>>;
  countriesCount?: Maybe<Scalars['Int']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  deliveryTax?: Maybe<Scalars['Decimal']['output']>;
  exchangeRate?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Decimal']['output']>;
};


export type DeliveryZoneCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  orderBy?: Array<CityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CityWhereInput;
};


export type DeliveryZoneCityCountArgs = {
  where?: CityWhereInput;
};


export type DeliveryZoneCountriesArgs = {
  cursor?: InputMaybe<CountryWhereUniqueInput>;
  orderBy?: Array<CountryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CountryWhereInput;
};


export type DeliveryZoneCountriesCountArgs = {
  where?: CountryWhereInput;
};

export type DeliveryZoneCreateInput = {
  city?: InputMaybe<CityRelateToManyForCreateInput>;
  countries?: InputMaybe<CountryRelateToManyForCreateInput>;
  currency?: InputMaybe<Scalars['String']['input']>;
  deliveryTax?: InputMaybe<Scalars['Decimal']['input']>;
  exchangeRate?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DeliveryZoneManyRelationFilter = {
  every?: InputMaybe<DeliveryZoneWhereInput>;
  none?: InputMaybe<DeliveryZoneWhereInput>;
  some?: InputMaybe<DeliveryZoneWhereInput>;
};

export type DeliveryZoneOrderByInput = {
  currency?: InputMaybe<OrderDirection>;
  deliveryTax?: InputMaybe<OrderDirection>;
  exchangeRate?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  rate?: InputMaybe<OrderDirection>;
};

export type DeliveryZoneRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<DeliveryZoneWhereUniqueInput>>;
  create?: InputMaybe<Array<DeliveryZoneCreateInput>>;
};

export type DeliveryZoneRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<DeliveryZoneWhereUniqueInput>>;
  create?: InputMaybe<Array<DeliveryZoneCreateInput>>;
  disconnect?: InputMaybe<Array<DeliveryZoneWhereUniqueInput>>;
  set?: InputMaybe<Array<DeliveryZoneWhereUniqueInput>>;
};

export type DeliveryZoneUpdateArgs = {
  data: DeliveryZoneUpdateInput;
  where: DeliveryZoneWhereUniqueInput;
};

export type DeliveryZoneUpdateInput = {
  city?: InputMaybe<CityRelateToManyForUpdateInput>;
  countries?: InputMaybe<CountryRelateToManyForUpdateInput>;
  currency?: InputMaybe<Scalars['String']['input']>;
  deliveryTax?: InputMaybe<Scalars['Decimal']['input']>;
  exchangeRate?: InputMaybe<Scalars['Decimal']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DeliveryZoneWhereInput = {
  AND?: InputMaybe<Array<DeliveryZoneWhereInput>>;
  NOT?: InputMaybe<Array<DeliveryZoneWhereInput>>;
  OR?: InputMaybe<Array<DeliveryZoneWhereInput>>;
  city?: InputMaybe<CityManyRelationFilter>;
  countries?: InputMaybe<CountryManyRelationFilter>;
  currency?: InputMaybe<StringFilter>;
  deliveryTax?: InputMaybe<DecimalNullableFilter>;
  exchangeRate?: InputMaybe<DecimalNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  rate?: InputMaybe<DecimalFilter>;
};

export type DeliveryZoneWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type InventoryBundle = {
  __typename?: 'InventoryBundle';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  remaining_qty?: Maybe<Scalars['Int']['output']>;
};


export type InventoryBundleProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type InventoryBundleProductsCountArgs = {
  where?: ProductWhereInput;
};

export type InventoryBundleCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForCreateInput>;
};

export type InventoryBundleOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type InventoryBundleUpdateArgs = {
  data: InventoryBundleUpdateInput;
  where: InventoryBundleWhereUniqueInput;
};

export type InventoryBundleUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductRelateToManyForUpdateInput>;
};

export type InventoryBundleWhereInput = {
  AND?: InputMaybe<Array<InventoryBundleWhereInput>>;
  NOT?: InputMaybe<Array<InventoryBundleWhereInput>>;
  OR?: InputMaybe<Array<InventoryBundleWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductManyRelationFilter>;
};

export type InventoryBundleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  allocated_qty?: Maybe<Scalars['Int']['output']>;
  container?: Maybe<Container>;
  current_location?: Maybe<Location>;
  eta?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  qty?: Maybe<Scalars['Int']['output']>;
  remaining_qty?: Maybe<Scalars['Int']['output']>;
};

export type InventoryItemCreateInput = {
  allocated_qty?: InputMaybe<Scalars['Int']['input']>;
  container?: InputMaybe<ContainerRelateToOneForCreateInput>;
  current_location?: InputMaybe<LocationRelateToOneForCreateInput>;
  eta?: InputMaybe<Scalars['DateTime']['input']>;
  product?: InputMaybe<ProductRelateToOneForCreateInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
  remaining_qty?: InputMaybe<Scalars['Int']['input']>;
};

export type InventoryItemManyRelationFilter = {
  every?: InputMaybe<InventoryItemWhereInput>;
  none?: InputMaybe<InventoryItemWhereInput>;
  some?: InputMaybe<InventoryItemWhereInput>;
};

export type InventoryItemOrderByInput = {
  allocated_qty?: InputMaybe<OrderDirection>;
  eta?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  qty?: InputMaybe<OrderDirection>;
  remaining_qty?: InputMaybe<OrderDirection>;
};

export type InventoryItemRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<InventoryItemWhereUniqueInput>>;
  create?: InputMaybe<Array<InventoryItemCreateInput>>;
};

export type InventoryItemRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<InventoryItemWhereUniqueInput>>;
  create?: InputMaybe<Array<InventoryItemCreateInput>>;
  disconnect?: InputMaybe<Array<InventoryItemWhereUniqueInput>>;
  set?: InputMaybe<Array<InventoryItemWhereUniqueInput>>;
};

export type InventoryItemUpdateArgs = {
  data: InventoryItemUpdateInput;
  where: InventoryItemWhereUniqueInput;
};

export type InventoryItemUpdateInput = {
  allocated_qty?: InputMaybe<Scalars['Int']['input']>;
  container?: InputMaybe<ContainerRelateToOneForUpdateInput>;
  current_location?: InputMaybe<LocationRelateToOneForUpdateInput>;
  eta?: InputMaybe<Scalars['DateTime']['input']>;
  product?: InputMaybe<ProductRelateToOneForUpdateInput>;
  qty?: InputMaybe<Scalars['Int']['input']>;
  remaining_qty?: InputMaybe<Scalars['Int']['input']>;
};

export type InventoryItemWhereInput = {
  AND?: InputMaybe<Array<InventoryItemWhereInput>>;
  NOT?: InputMaybe<Array<InventoryItemWhereInput>>;
  OR?: InputMaybe<Array<InventoryItemWhereInput>>;
  allocated_qty?: InputMaybe<IntFilter>;
  container?: InputMaybe<ContainerWhereInput>;
  current_location?: InputMaybe<LocationWhereInput>;
  eta?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  product?: InputMaybe<ProductWhereInput>;
  qty?: InputMaybe<IntFilter>;
  remaining_qty?: InputMaybe<IntFilter>;
};

export type InventoryItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID']['output'];
  inventoryItems?: Maybe<Array<InventoryItem>>;
  inventoryItemsCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type LocationInventoryItemsArgs = {
  cursor?: InputMaybe<InventoryItemWhereUniqueInput>;
  orderBy?: Array<InventoryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InventoryItemWhereInput;
};


export type LocationInventoryItemsCountArgs = {
  where?: InventoryItemWhereInput;
};

export type LocationCreateInput = {
  inventoryItems?: InputMaybe<InventoryItemRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type LocationOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type LocationRelateToOneForCreateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
};

export type LocationRelateToOneForUpdateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LocationUpdateArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateInput = {
  inventoryItems?: InputMaybe<InventoryItemRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  id?: InputMaybe<IdFilter>;
  inventoryItems?: InputMaybe<InventoryItemManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type LocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createCategories?: Maybe<Array<Maybe<Category>>>;
  createCategory?: Maybe<Category>;
  createCities?: Maybe<Array<Maybe<City>>>;
  createCity?: Maybe<City>;
  createContainer?: Maybe<Container>;
  createContainerItem?: Maybe<ContainerItem>;
  createContainerItems?: Maybe<Array<Maybe<ContainerItem>>>;
  createContainers?: Maybe<Array<Maybe<Container>>>;
  createCountries?: Maybe<Array<Maybe<Country>>>;
  createCountry?: Maybe<Country>;
  createDeliveryRate?: Maybe<DeliveryRate>;
  createDeliveryRates?: Maybe<Array<Maybe<DeliveryRate>>>;
  createDeliveryZone?: Maybe<DeliveryZone>;
  createDeliveryZones?: Maybe<Array<Maybe<DeliveryZone>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInventoryBundle?: Maybe<InventoryBundle>;
  createInventoryBundles?: Maybe<Array<Maybe<InventoryBundle>>>;
  createInventoryItem?: Maybe<InventoryItem>;
  createInventoryItems?: Maybe<Array<Maybe<InventoryItem>>>;
  createLocation?: Maybe<Location>;
  createLocations?: Maybe<Array<Maybe<Location>>>;
  createProduct?: Maybe<Product>;
  createProducts?: Maybe<Array<Maybe<Product>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteCategories?: Maybe<Array<Maybe<Category>>>;
  deleteCategory?: Maybe<Category>;
  deleteCities?: Maybe<Array<Maybe<City>>>;
  deleteCity?: Maybe<City>;
  deleteContainer?: Maybe<Container>;
  deleteContainerItem?: Maybe<ContainerItem>;
  deleteContainerItems?: Maybe<Array<Maybe<ContainerItem>>>;
  deleteContainers?: Maybe<Array<Maybe<Container>>>;
  deleteCountries?: Maybe<Array<Maybe<Country>>>;
  deleteCountry?: Maybe<Country>;
  deleteDeliveryRate?: Maybe<DeliveryRate>;
  deleteDeliveryRates?: Maybe<Array<Maybe<DeliveryRate>>>;
  deleteDeliveryZone?: Maybe<DeliveryZone>;
  deleteDeliveryZones?: Maybe<Array<Maybe<DeliveryZone>>>;
  deleteInventoryBundle?: Maybe<InventoryBundle>;
  deleteInventoryBundles?: Maybe<Array<Maybe<InventoryBundle>>>;
  deleteInventoryItem?: Maybe<InventoryItem>;
  deleteInventoryItems?: Maybe<Array<Maybe<InventoryItem>>>;
  deleteLocation?: Maybe<Location>;
  deleteLocations?: Maybe<Array<Maybe<Location>>>;
  deleteProduct?: Maybe<Product>;
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateCategories?: Maybe<Array<Maybe<Category>>>;
  updateCategory?: Maybe<Category>;
  updateCities?: Maybe<Array<Maybe<City>>>;
  updateCity?: Maybe<City>;
  updateContainer?: Maybe<Container>;
  updateContainerItem?: Maybe<ContainerItem>;
  updateContainerItems?: Maybe<Array<Maybe<ContainerItem>>>;
  updateContainers?: Maybe<Array<Maybe<Container>>>;
  updateCountries?: Maybe<Array<Maybe<Country>>>;
  updateCountry?: Maybe<Country>;
  updateDeliveryRate?: Maybe<DeliveryRate>;
  updateDeliveryRates?: Maybe<Array<Maybe<DeliveryRate>>>;
  updateDeliveryZone?: Maybe<DeliveryZone>;
  updateDeliveryZones?: Maybe<Array<Maybe<DeliveryZone>>>;
  updateInventoryBundle?: Maybe<InventoryBundle>;
  updateInventoryBundles?: Maybe<Array<Maybe<InventoryBundle>>>;
  updateInventoryItem?: Maybe<InventoryItem>;
  updateInventoryItems?: Maybe<Array<Maybe<InventoryItem>>>;
  updateLocation?: Maybe<Location>;
  updateLocations?: Maybe<Array<Maybe<Location>>>;
  updateProduct?: Maybe<Product>;
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateCategoriesArgs = {
  data: Array<CategoryCreateInput>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCitiesArgs = {
  data: Array<CityCreateInput>;
};


export type MutationCreateCityArgs = {
  data: CityCreateInput;
};


export type MutationCreateContainerArgs = {
  data: ContainerCreateInput;
};


export type MutationCreateContainerItemArgs = {
  data: ContainerItemCreateInput;
};


export type MutationCreateContainerItemsArgs = {
  data: Array<ContainerItemCreateInput>;
};


export type MutationCreateContainersArgs = {
  data: Array<ContainerCreateInput>;
};


export type MutationCreateCountriesArgs = {
  data: Array<CountryCreateInput>;
};


export type MutationCreateCountryArgs = {
  data: CountryCreateInput;
};


export type MutationCreateDeliveryRateArgs = {
  data: DeliveryRateCreateInput;
};


export type MutationCreateDeliveryRatesArgs = {
  data: Array<DeliveryRateCreateInput>;
};


export type MutationCreateDeliveryZoneArgs = {
  data: DeliveryZoneCreateInput;
};


export type MutationCreateDeliveryZonesArgs = {
  data: Array<DeliveryZoneCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateInventoryBundleArgs = {
  data: InventoryBundleCreateInput;
};


export type MutationCreateInventoryBundlesArgs = {
  data: Array<InventoryBundleCreateInput>;
};


export type MutationCreateInventoryItemArgs = {
  data: InventoryItemCreateInput;
};


export type MutationCreateInventoryItemsArgs = {
  data: Array<InventoryItemCreateInput>;
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};


export type MutationCreateLocationsArgs = {
  data: Array<LocationCreateInput>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductsArgs = {
  data: Array<ProductCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteCategoriesArgs = {
  where: Array<CategoryWhereUniqueInput>;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCitiesArgs = {
  where: Array<CityWhereUniqueInput>;
};


export type MutationDeleteCityArgs = {
  where: CityWhereUniqueInput;
};


export type MutationDeleteContainerArgs = {
  where: ContainerWhereUniqueInput;
};


export type MutationDeleteContainerItemArgs = {
  where: ContainerItemWhereUniqueInput;
};


export type MutationDeleteContainerItemsArgs = {
  where: Array<ContainerItemWhereUniqueInput>;
};


export type MutationDeleteContainersArgs = {
  where: Array<ContainerWhereUniqueInput>;
};


export type MutationDeleteCountriesArgs = {
  where: Array<CountryWhereUniqueInput>;
};


export type MutationDeleteCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type MutationDeleteDeliveryRateArgs = {
  where: DeliveryRateWhereUniqueInput;
};


export type MutationDeleteDeliveryRatesArgs = {
  where: Array<DeliveryRateWhereUniqueInput>;
};


export type MutationDeleteDeliveryZoneArgs = {
  where: DeliveryZoneWhereUniqueInput;
};


export type MutationDeleteDeliveryZonesArgs = {
  where: Array<DeliveryZoneWhereUniqueInput>;
};


export type MutationDeleteInventoryBundleArgs = {
  where: InventoryBundleWhereUniqueInput;
};


export type MutationDeleteInventoryBundlesArgs = {
  where: Array<InventoryBundleWhereUniqueInput>;
};


export type MutationDeleteInventoryItemArgs = {
  where: InventoryItemWhereUniqueInput;
};


export type MutationDeleteInventoryItemsArgs = {
  where: Array<InventoryItemWhereUniqueInput>;
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationDeleteLocationsArgs = {
  where: Array<LocationWhereUniqueInput>;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductsArgs = {
  where: Array<ProductWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateCategoriesArgs = {
  data: Array<CategoryUpdateArgs>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCitiesArgs = {
  data: Array<CityUpdateArgs>;
};


export type MutationUpdateCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpdateContainerArgs = {
  data: ContainerUpdateInput;
  where: ContainerWhereUniqueInput;
};


export type MutationUpdateContainerItemArgs = {
  data: ContainerItemUpdateInput;
  where: ContainerItemWhereUniqueInput;
};


export type MutationUpdateContainerItemsArgs = {
  data: Array<ContainerItemUpdateArgs>;
};


export type MutationUpdateContainersArgs = {
  data: Array<ContainerUpdateArgs>;
};


export type MutationUpdateCountriesArgs = {
  data: Array<CountryUpdateArgs>;
};


export type MutationUpdateCountryArgs = {
  data: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};


export type MutationUpdateDeliveryRateArgs = {
  data: DeliveryRateUpdateInput;
  where: DeliveryRateWhereUniqueInput;
};


export type MutationUpdateDeliveryRatesArgs = {
  data: Array<DeliveryRateUpdateArgs>;
};


export type MutationUpdateDeliveryZoneArgs = {
  data: DeliveryZoneUpdateInput;
  where: DeliveryZoneWhereUniqueInput;
};


export type MutationUpdateDeliveryZonesArgs = {
  data: Array<DeliveryZoneUpdateArgs>;
};


export type MutationUpdateInventoryBundleArgs = {
  data: InventoryBundleUpdateInput;
  where: InventoryBundleWhereUniqueInput;
};


export type MutationUpdateInventoryBundlesArgs = {
  data: Array<InventoryBundleUpdateArgs>;
};


export type MutationUpdateInventoryItemArgs = {
  data: InventoryItemUpdateInput;
  where: InventoryItemWhereUniqueInput;
};


export type MutationUpdateInventoryItemsArgs = {
  data: Array<InventoryItemUpdateArgs>;
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdateLocationsArgs = {
  data: Array<LocationUpdateArgs>;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductsArgs = {
  data: Array<ProductUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<Category>;
  cbm?: Maybe<Scalars['Decimal']['output']>;
  finish?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inventoryItems?: Maybe<Array<InventoryItem>>;
  inventoryItemsCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Decimal']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  supplierSku?: Maybe<Scalars['String']['output']>;
};


export type ProductInventoryItemsArgs = {
  cursor?: InputMaybe<InventoryItemWhereUniqueInput>;
  orderBy?: Array<InventoryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InventoryItemWhereInput;
};


export type ProductInventoryItemsCountArgs = {
  where?: InventoryItemWhereInput;
};

export type ProductCreateInput = {
  category?: InputMaybe<CategoryRelateToOneForCreateInput>;
  cbm?: InputMaybe<Scalars['Decimal']['input']>;
  finish?: InputMaybe<Scalars['String']['input']>;
  inventoryItems?: InputMaybe<InventoryItemRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplierSku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductManyRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  cbm?: InputMaybe<OrderDirection>;
  finish?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  sku?: InputMaybe<OrderDirection>;
  supplierSku?: InputMaybe<OrderDirection>;
};

export type ProductRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  create?: InputMaybe<Array<ProductCreateInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
};

export type ProductRelateToOneForCreateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
};

export type ProductRelateToOneForUpdateInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductUpdateArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateInput = {
  category?: InputMaybe<CategoryRelateToOneForUpdateInput>;
  cbm?: InputMaybe<Scalars['Decimal']['input']>;
  finish?: InputMaybe<Scalars['String']['input']>;
  inventoryItems?: InputMaybe<InventoryItemRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplierSku?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  category?: InputMaybe<CategoryWhereInput>;
  cbm?: InputMaybe<DecimalNullableFilter>;
  finish?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  inventoryItems?: InputMaybe<InventoryItemManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<DecimalFilter>;
  sku?: InputMaybe<StringFilter>;
  supplierSku?: InputMaybe<StringFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  categories?: Maybe<Array<Category>>;
  categoriesCount?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Category>;
  cities?: Maybe<Array<City>>;
  citiesCount?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<City>;
  container?: Maybe<Container>;
  containerItem?: Maybe<ContainerItem>;
  containerItems?: Maybe<Array<ContainerItem>>;
  containerItemsCount?: Maybe<Scalars['Int']['output']>;
  containers?: Maybe<Array<Container>>;
  containersCount?: Maybe<Scalars['Int']['output']>;
  countries?: Maybe<Array<Country>>;
  countriesCount?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Country>;
  deliveryRate?: Maybe<DeliveryRate>;
  deliveryRates?: Maybe<Array<DeliveryRate>>;
  deliveryRatesCount?: Maybe<Scalars['Int']['output']>;
  deliveryZone?: Maybe<DeliveryZone>;
  deliveryZones?: Maybe<Array<DeliveryZone>>;
  deliveryZonesCount?: Maybe<Scalars['Int']['output']>;
  inventoryBundle?: Maybe<InventoryBundle>;
  inventoryBundles?: Maybe<Array<InventoryBundle>>;
  inventoryBundlesCount?: Maybe<Scalars['Int']['output']>;
  inventoryItem?: Maybe<InventoryItem>;
  inventoryItems?: Maybe<Array<InventoryItem>>;
  inventoryItemsCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Product>>;
  productsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: Array<CategoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CategoryWhereInput;
};


export type QueryCategoriesCountArgs = {
  where?: CategoryWhereInput;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCitiesArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  orderBy?: Array<CityOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CityWhereInput;
};


export type QueryCitiesCountArgs = {
  where?: CityWhereInput;
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryContainerArgs = {
  where: ContainerWhereUniqueInput;
};


export type QueryContainerItemArgs = {
  where: ContainerItemWhereUniqueInput;
};


export type QueryContainerItemsArgs = {
  cursor?: InputMaybe<ContainerItemWhereUniqueInput>;
  orderBy?: Array<ContainerItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ContainerItemWhereInput;
};


export type QueryContainerItemsCountArgs = {
  where?: ContainerItemWhereInput;
};


export type QueryContainersArgs = {
  cursor?: InputMaybe<ContainerWhereUniqueInput>;
  orderBy?: Array<ContainerOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ContainerWhereInput;
};


export type QueryContainersCountArgs = {
  where?: ContainerWhereInput;
};


export type QueryCountriesArgs = {
  cursor?: InputMaybe<CountryWhereUniqueInput>;
  orderBy?: Array<CountryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CountryWhereInput;
};


export type QueryCountriesCountArgs = {
  where?: CountryWhereInput;
};


export type QueryCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type QueryDeliveryRateArgs = {
  where: DeliveryRateWhereUniqueInput;
};


export type QueryDeliveryRatesArgs = {
  cursor?: InputMaybe<DeliveryRateWhereUniqueInput>;
  orderBy?: Array<DeliveryRateOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: DeliveryRateWhereInput;
};


export type QueryDeliveryRatesCountArgs = {
  where?: DeliveryRateWhereInput;
};


export type QueryDeliveryZoneArgs = {
  where: DeliveryZoneWhereUniqueInput;
};


export type QueryDeliveryZonesArgs = {
  cursor?: InputMaybe<DeliveryZoneWhereUniqueInput>;
  orderBy?: Array<DeliveryZoneOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: DeliveryZoneWhereInput;
};


export type QueryDeliveryZonesCountArgs = {
  where?: DeliveryZoneWhereInput;
};


export type QueryInventoryBundleArgs = {
  where: InventoryBundleWhereUniqueInput;
};


export type QueryInventoryBundlesArgs = {
  cursor?: InputMaybe<InventoryBundleWhereUniqueInput>;
  orderBy?: Array<InventoryBundleOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InventoryBundleWhereInput;
};


export type QueryInventoryBundlesCountArgs = {
  where?: InventoryBundleWhereInput;
};


export type QueryInventoryItemArgs = {
  where: InventoryItemWhereUniqueInput;
};


export type QueryInventoryItemsArgs = {
  cursor?: InputMaybe<InventoryItemWhereUniqueInput>;
  orderBy?: Array<InventoryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InventoryItemWhereInput;
};


export type QueryInventoryItemsCountArgs = {
  where?: InventoryItemWhereInput;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryLocationsArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  orderBy?: Array<LocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: LocationWhereInput;
};


export type QueryLocationsCountArgs = {
  where?: LocationWhereInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: Array<ProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ProductWhereInput;
};


export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GetContainersQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip: Scalars['Int']['input'];
  cursor?: InputMaybe<ContainerWhereUniqueInput>;
  where: ContainerWhereInput;
}>;


export type GetContainersQuery = { __typename?: 'Query', containersCount?: number | null, containers?: Array<{ __typename?: 'Container', id: string, name?: string | null, qty_due_in?: number | null, dueDate?: any | null, inventoryItems?: Array<{ __typename?: 'InventoryItem', qty?: number | null, remaining_qty?: number | null, product?: { __typename?: 'Product', name?: string | null } | null }> | null }> | null };


export const GetContainersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContainers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContainerWhereUniqueInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContainerWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"containersCount"}},{"kind":"Field","name":{"kind":"Name","value":"containers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"qty_due_in"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"inventoryItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"qty"}},{"kind":"Field","name":{"kind":"Name","value":"remaining_qty"}}]}}]}}]}}]} as unknown as DocumentNode<GetContainersQuery, GetContainersQueryVariables>;