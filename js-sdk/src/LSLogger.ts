function createLogger(prefix: any) {
  return (type: any, ...args: any) => {
    const timestamp = new Date().toISOString();
    const messageWithTimestamp = `[${timestamp}] [${prefix.toUpperCase()} ${type.toUpperCase()}] ${args.join(
      ' ',
    )}`;

    switch (type) {
      case 'log':
        console.log(messageWithTimestamp);
        break;
      case 'warn':
        console.warn(messageWithTimestamp);
        break;
      case 'error':
        console.error(messageWithTimestamp);
        break;
      default:
        console.log(messageWithTimestamp);
    }
  };
}

// 로그 유형에 따른 함수를 생성합니다.
const LSLogger = createLogger('example');

LSLogger('type', 'qwe');
export default LSLogger;
