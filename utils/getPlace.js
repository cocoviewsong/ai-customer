import { getRecentSuppliers } from './fetchFAQData.js';

// 计算两点之间的 Haversine 距离（单位：公里）
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // 地球半径（公里）
  const toRad = (deg) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

const getClosestCountry = async () => {
  // 1. 获取用户 IP 地址的地理位置
  const response = await $fetch('https://ipapi.co/json/');

  // 获取当前用户的经纬度
  const userLat = response.latitude;
  const userLon = response.longitude;

  console.log(`你的IP位置: ${userLat}, ${userLon}`);

  const { content, code } = await getRecentSuppliers();
  if (code !== 200) return { success };
  console.log('placeResponse!!!!!!!!!!!!!!!!!!!!!!!', content, code);

  // 2. 各个公司的经纬度
  const countries = content;

  // 3. 计算用户到各个公司的距离
  let minDistance = Infinity;
  let closestCompany = null;

  for (const [companyName, companyList] of Object.entries(countries)) {
    companyList.forEach((company) => {
      const distance = haversineDistance(
        userLat,
        userLon,
        company.lat,
        company.lon
      );
      console.log(`${companyName} 距离: ${distance.toFixed(2)} km`);

      if (distance < minDistance) {
        minDistance = distance;
        closestCompany = {
          name: companyName,
          ...company,
          distance,
          success: true,
        };
      }
    });
  }

  if (closestCompany) {
    console.log(
      `最近的公司是: ${
        closestCompany.name
      }, 距离: ${closestCompany.distance.toFixed(2)} km`
    );
  } else {
    console.log('未找到最近的公司');
  }
  console.log('closestCompany!!!!!!!!!!!!!!!!!!!!!!!', closestCompany);

  return closestCompany;
};

// 运行函数
// getClosestCountry().then((closest) => console.log('最近的国家是:', closest));

export default getClosestCountry;
