/**
 * 请求常见问题
 *
 */

export const getFAQData = () => $fetch('/api/faq');

/**
 * 请求flash系列产品
 *
 */
export const getFlashProductModel = () => $fetch('/api/flash-product');

/**
 * 请求GD55LX02GE型号产品参数
 *
 */
export const getFlashModelParams = () => $fetch('/api/flash-product-params');

/**
 * 请求利基型DRAM系列产品
 *
 */
export const getDramProductModel = () => $fetch('/api/dram-product');

/**
 * 获取热销商品
 *
 */
export const getHotProduct = () => $fetch('/api/hot-product');

/**
 * 获取产品数据手册
 *
 */
export const getProductDataSheet = () => $fetch('/api/product-data-sheet');

/**
 * 获取产品数据手册
 *
 */
export const getProductManual = () => $fetch('/api/product-manual');

/**
 * 获取供应商的经纬度、电话号码、地址
 *
 */
export const getRecentSuppliers = () => $fetch(`/api/recent-suppliers`);

/**
 * 获取flash系列产品售后信息
 *
 */
export const getFlashProductAfterSales = () =>
  $fetch(`/api/flash-product-after-sales`);

/**
 * 获取flash系列产品售后信息描述
 *
 */
export const getFlashProductAfterSalesDesc = () =>
  $fetch(`/api/flash-product-after-sales-desc`);

/**
 * 获取flash系列产品库存信息
 *
 */
export const getFlashProductInventor = () =>
  $fetch(`/api/flash-product-inventor`);

/**
 * 获取产品库存信息的flash系列产品
 *
 */
export const getProductInventorFlash = () =>
  $fetch(`/api/product-inventor-flash`);

/**
 * 获取招聘信息
 *
 */
export const getRecruitmentInfo = () => $fetch(`/api/recruitment-info`);
