import {
  getFlashProductModel,
  getFlashModelParams,
  getDramProductModel,
  getHotProduct,
  getProductDataSheet,
  getProductManual,
  getFlashProductAfterSales,
  getFlashProductAfterSalesDesc,
  getProductInventorFlash,
  getFlashProductInventor,
  getRecruitmentInfo,
} from './fetchFAQData.js';
import getClosestCountry from './getPlace.js';

/**
 * 判断数字范围
 */
const inRange = (num, min, max) => Number(num) > min && Number(num) < max;

/**
 * 菜单配置
 *
 */
const faqOptions = {
  // 一级菜单处理
  咨询产品参数: async (afterDash, key) => {
    console.log('咨询产品参数 key!!!!!!', key);

    const apiMap = {
      // 公司产品:产品接口
      Flash: getFlashProductModel,
      利基型DRAM: getDramProductModel,
      MCU: getDramProductModel,
      传感器: getDramProductModel,
      模拟产品: getDramProductModel,
    };

    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'menu',
        data: {
          menuTitle: content.title,
          faqList: content.subQuestion,
          useComponent: 'Test',
        },
      };
    }
  },

  咨询产品使用手册: async (afterDash, key) => {
    console.log('咨询产品使用手册 key!!!!!!', key);
    const apiMap = {
      // 公司产品:产品接口
      Flash: getProductDataSheet,
      利基型DRAM: getProductDataSheet,
      MCU: getProductDataSheet,
      传感器: getProductDataSheet,
      模拟产品: getProductDataSheet,
    };
    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'menu',
        data: {
          menuTitle: content.title,
          faqList: content.subQuestion,
        },
      };
    }
  },

  咨询产品售后: async (afterDash, key) => {
    console.log('咨询产品售后 key!!!!!!', key);
    const apiMap = {
      // 公司产品:产品接口
      Flash: getFlashProductAfterSales,
      利基型DRAM: getFlashProductAfterSales,
      MCU: getFlashProductAfterSales,
      传感器: getFlashProductAfterSales,
      模拟产品: getFlashProductAfterSales,
    };
    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'menu',
        data: {
          menuTitle: content.title,
          faqList: content.subQuestion,
        },
      };
    }
  },

  查询产品库存: async (afterDash, key) => {
    console.log('查询产品库存 key!!!!!!', key);
    const apiMap = {
      // 公司产品:产品接口
      Flash: getProductInventorFlash,
      利基型DRAM: getProductInventorFlash,
      MCU: getProductInventorFlash,
      传感器: getProductInventorFlash,
      模拟产品: getProductInventorFlash,
    };
    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'menu',
        data: {
          menuTitle: content.title,
          faqList: content.subQuestion,
        },
      };
    }
  },

  热销商品推荐: async () => {
    const { content } = await getHotProduct();
    console.log('看这里啊啊-热销商品推荐', content);

    return {
      type: 'desc',
      data: {
        content: content.desc,
        dataList: content.dataList,
        columns: content.columns,
        useComponent: content.useComponent || 'HotProduct',
      },
    };
  },

  // Flash产品系列
  'SPI NOR Flash': async (afterDash, key) => {
    console.log('SPI NOR Flash key!!!!!!', key);
    /* 
        根据key来判断,与接口数据中的key值对应,
          1111~1133 是"咨询产品参数"问题
          2111~2133 是"咨询产品使用手册"问题
          3111~3133 是"咨询产品售后"问题
          5111~6133 是"查询产品库存"问题
    */
    let apiMap;
    if (inRange(key, 1000, 1999)) {
      console.log('1111~1133 是"咨询产品参数"问题');
      apiMap = {
        // SPI NOR Flash型号：参数接口
        GD55LX02GE: getFlashModelParams,
        GD55LT02GE: getFlashModelParams,
        GD55LB02GE: getFlashModelParams,
      };
    } else if (inRange(key, 2000, 2999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD55LX02GE: getProductManual,
        GD55LT02GE: getProductManual,
        GD55LB02GE: getProductManual,
      };
    } else if (inRange(key, 3000, 3999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD55LX02GE: getFlashProductAfterSalesDesc,
        GD55LT02GE: getFlashProductAfterSalesDesc,
        GD55LB02GE: getFlashProductAfterSalesDesc,
      };
    } else if (inRange(key, 5000, 5999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD55LX02GE: getFlashProductInventor,
        GD55LT02GE: getFlashProductInventor,
        GD55LB02GE: getFlashProductInventor,
      };
    }
    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'desc',
        data: {
          title: content.title,
          content: content.subQuestion.desc,
        },
      };
    }
  },

  'SPI NAND Flash': async (afterDash, key) => {
    console.log('SPI NAND Flash key!!!!!!', key);
    let apiMap;
    if (inRange(key, 1000, 1999)) {
      console.log('1111~1133 是"咨询产品参数"问题');
      apiMap = {
        // SPI NOR Flash型号：参数接口
        GD5F2GQ5UE: getFlashModelParams,
        GD55LT02GE: getFlashModelParams,
        GD55LB02GE: getFlashModelParams,
      };
    } else if (inRange(key, 2000, 2999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD5F2GQ5UE: getProductManual,
        GD55LT02GE: getProductManual,
        GD55LB02GE: getProductManual,
      };
    } else if (inRange(key, 3000, 3999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD5F2GQ5UE: getFlashProductAfterSalesDesc,
        GD55LT02GE: getFlashProductAfterSalesDesc,
        GD55LB02GE: getFlashProductAfterSalesDesc,
      };
    } else if (inRange(key, 5000, 5999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD5F2GQ5UE: getFlashProductInventor,
        GD55LT02GE: getFlashProductInventor,
        GD55LB02GE: getFlashProductInventor,
      };
    }
    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'desc',
        data: {
          title: content.title,
          content: content.subQuestion.desc,
        },
      };
    }
  },

  'Parallel NAND Flash': async (afterDash, key) => {
    console.log('Parallel NAND Flash key!!!!!!', key);
    let apiMap;
    if (inRange(key, 1000, 1999)) {
      console.log('1111~1133 是"咨询产品参数"问题');
      apiMap = {
        GD9FS2GxF2A: getFlashModelParams,
        GD55LT02GE: getFlashModelParams,
        GD55LB02GE: getFlashModelParams,
      };
    } else if (inRange(key, 2000, 2999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD9FS2GxF2A: getProductManual,
        GD55LT02GE: getProductManual,
        GD55LB02GE: getProductManual,
      };
    } else if (inRange(key, 3000, 3999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD9FS2GxF2A: getFlashProductAfterSalesDesc,
        GD55LT02GE: getFlashProductAfterSalesDesc,
        GD55LB02GE: getFlashProductAfterSalesDesc,
      };
    } else if (inRange(key, 5000, 5999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        GD9FS2GxF2A: getFlashProductInventor,
        GD55LT02GE: getFlashProductInventor,
        GD55LB02GE: getFlashProductInventor,
      };
    }
    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'desc',
        data: {
          title: content.title,
          content: content.subQuestion.desc,
        },
      };
    }
  },

  利基型DDR3L: async (afterDash, key) => {
    console.log('利基型DDR3L key!!!!!!', key);
    if (inRange(key, 1000, 1999)) {
      console.log('1111~1133 是"咨询产品参数"问题');
      apiMap = {
        'GDP0BFLM-CB': getFlashModelParams,
        'GDP1BFLA-CB': getFlashModelParams,
        'GDP1BFLA-CA': getFlashModelParams,
      };
    } else if (inRange(key, 2000, 2999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        'GDP0BFLM-CB': getProductManual,
        'GDP1BFLA-CB': getProductManual,
        'GDP1BFLA-CA': getProductManual,
      };
    } else if (inRange(key, 3000, 3999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        'GDP0BFLM-CB': getFlashProductAfterSalesDesc,
        'GDP1BFLA-CB': getFlashProductAfterSalesDesc,
        'GDP1BFLA-CA': getFlashProductAfterSalesDesc,
      };
    } else if (inRange(key, 5000, 5999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        'GDP0BFLM-CB': getFlashProductInventor,
        'GDP1BFLA-CB': getFlashProductInventor,
        'GDP1BFLA-CA': getFlashProductInventor,
      };
    }
    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'desc',
        data: {
          title: content.title,
          content: content.subQuestion.desc,
        },
      };
    }
  },

  利基型DDR4: async (afterDash, key) => {
    console.log('利基型DDR3L key!!!!!!', key);
    if (inRange(key, 1000, 1999)) {
      console.log('1111~1133 是"咨询产品参数"问题');
      apiMap = {
        'GDP0BFLM-CB': getFlashModelParams,
        'GDP1BFLA-CB': getFlashModelParams,
        'GDP1BFLA-CA': getFlashModelParams,
      };
    } else if (inRange(key, 2000, 2999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        'GDP0BFLM-CB': getProductManual,
        'GDP1BFLA-CB': getProductManual,
        'GDP1BFLA-CA': getProductManual,
      };
    } else if (inRange(key, 3000, 3999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        'GDP0BFLM-CB': getFlashProductAfterSalesDesc,
        'GDP1BFLA-CB': getFlashProductAfterSalesDesc,
        'GDP1BFLA-CA': getFlashProductAfterSalesDesc,
      };
    } else if (inRange(key, 5000, 5999)) {
      console.log('2111~2133 是"咨询产品使用手册"问题');
      apiMap = {
        'GDP0BFLM-CB': getFlashProductInventor,
        'GDP1BFLA-CB': getFlashProductInventor,
        'GDP1BFLA-CA': getFlashProductInventor,
      };
    }
    if (apiMap[afterDash]) {
      const { content } = await apiMap[afterDash]();
      return {
        type: 'desc',
        data: {
          title: content.title,
          content: content.subQuestion.desc,
        },
      };
    }
  },

  // 咨询离我最近的供应商
  咨询离我最近的供应商: async () => {
    const {
      name,
      tel = '',
      address = '',
      邮政编码 = '',
      success,
      href = '#',
    } = await getClosestCountry();
    if (!success)
      return {
        type: 'desc',
        data: {
          content: `地址查询失败`,
          address,
          tel,
          postalCode: 邮政编码,
          // 可以接到百度地图上
          href,
        },
      };
    return {
      type: 'desc',
      data: {
        useComponent: 'DescList',
        info: [
          {
            key: '1',
            address,
            tel,
            postalCode: 邮政编码,
            // 可以接到百度地图上
            href,
          },
        ],
      },
    };
  },

  // 获取技术人员支持
  获得技术人员支持: () => {
    return {
      type: 'desc',
      data: {
        content: `<a class="desc" target="_blank" href="https://www.gigadevice.com.cn/mygd/form/contact-us.html">获得技术人员支持点这里</a>`,
      },
    };
  },

  // 投资者联络
  投资者联络: () => {
    return {
      type: 'desc',
      data: {
        content: `<a class="desc" target="_blank" href="https://msns.sseinfo.com/#/companyDetail/companyQuestion/companyLatestQuestion?stockCode=603986">投资者联络点这里</a>`,
      },
    };
  },

  // 招贤纳士
  招贤纳士: async () => {
    const { code, content } = await getRecruitmentInfo();
    console.log('招贤纳士', content);
    return {
      type: 'desc',
      data: {
        // 万一传了字符串
        // useComponent: content.useComponent ?? 'SendOffer',
        useComponent: content.useComponent || 'SendOffer',
        recruitmentInfo: content.recruitmentInfo,
      },
    };
  },

  // 改进与建议
  改进与建议: () => {
    return {
      type: 'desc',
      data: {
        content: `<a  class="desc" target="_blank" href="https://www.gigadevice.com.cn/mygd/form/contact-us.html">点这里提交改进与建议</a>`,
      },
    };
  },

  // 定制产品
  定制产品: () => {
    return {
      type: 'desc',
      data: {
        content: `<a  class="desc" target="_blank" href="https://www.gigadevice.com.cn/mygd/form/contact-us.html">点这里定制产品</a>`,
      },
    };
  },
};

export default faqOptions;
