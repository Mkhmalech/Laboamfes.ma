export enum CatalogActions  {

   CATALOG_LIST_ALL_TESTS_FROM_API = "@@labCatalog/LIST_ALL_TESTS_FROM_API",
   CATALOG_LIST_ALL_TESTS_FROM_API_FETCHING = "@@labCatalog/LIST_ALL_TESTS_FROM_API_FETCHING",
   CATALOG_LIST_ALL_TESTS_FROM_API_SUCCESS = "@@labCatalog/LIST_ALL_TESTS_FROM_API_SUCCESS",
   CATALOG_LIST_ALL_TESTS_FROM_API_ERROR = "@@labCatalog/CATALOG_LIST_ALL_TESTS_FROM_API_ERROR",



   /** Catalog Operations Actions  */

   // Filter catalog list
   CATALOG_LIST_FILTER_TEST_NAME = "@@labCatalog/CATALOG_LIST_FILTER_TEST_NAME",
   CATALOG_LIST_FILTER_TEST_NAME_ERROR = "@@labCatalog/CATALOG_LIST_FILTER_TEST_NAME_ERROR",
   CATALOG_LIST_FILTER_TEST_NAME_SUCCESS = "@@labCatalog/CATALOG_LIST_FILTER_TEST_NAME_SUCCESS"
}