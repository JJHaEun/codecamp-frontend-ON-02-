export const checkValidationFile = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다!");
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("파일용량이 너무 큽니다 제한은 5MB");
    return false;
  }
  if (
    !file.type.includes("jpeg") && // 얘도 아니고
    !file.type.includes("png") && // 얘도 아니고
    !file.type.includes("jpg") // 얘도 아니면
  ) {
    alert("jpeg파일 또는 jpg 또는 png파일만 업로드 가능합니다");
    return false;
  }
  return true;
};
