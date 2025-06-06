const now = new Date();
const koreaTime = now.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

console.log("한국 시간:", koreaTime);
