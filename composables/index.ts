import Http from "@/utils/http";

/**
 * 获取标签
 */
export const getTags = () => {
  return Http.get("/api/apiWx/wechat-config?operate=getJsapiConfig");
};
