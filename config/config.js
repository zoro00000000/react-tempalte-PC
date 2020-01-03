/**
 * Created by liong
 * 
 * 接口地址配置文件
 */

// dev 环境
export const DEV_URL = 'https://dev.lioong.com'

// test 环境
export const TEST_URL = 'https://test.lioong.com'

// qa 环境
export const QA_URL = 'https://qa.lioong.com'

// release 环境
export const RELEASE_URL = 'https://release.lioong.com'

// online 环境
export const ONLINE_URL = 'https://online.lioong.com'

//easy-mock模拟数据接口地址
const EASY_MOCK = 'https://www.easy-mock.com/mock';
const MOCK_AUTH = EASY_MOCK + '/597b5ed9a1d30433d8411456/auth'; // 权限接口地址
export const MOCK_AUTH_ADMIN = MOCK_AUTH + '/admin'; // 管理员权限接口
export const MOCK_AUTH_VISITOR = MOCK_AUTH + '/visitor'; // 访问权限接口