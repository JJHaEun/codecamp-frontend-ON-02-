export const checkValidationFile = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다!");
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("파일용량이 너무 큽니다 제한은 5MB");
    return false;
  }

  return true;
};
