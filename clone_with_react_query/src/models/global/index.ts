export declare namespace M_Global {
  interface I_User {
    menuAccess: T_MenuAccess[] | null;
    loginType: string;
    multiLogin: null;
    userEmail: string;
    userId: string;
    userIp: string;
    userName: string;
    userTel: string;
    userDept: string;
    userNo: number;
    userDuty: string;
    userRole: 'ROLE_MASTER' | 'ROLE_ADMIN' | 'ROLE_USER'; // ROLE_MASTER:최고관리자, ROLE_ADMIN:일반관리자, ROLE_USER:일반사용자
    adUserAccount: string; // ad 계정
    userAccountControl: string;
    modifyLockDate: number | null; // 비밀번호 체크 오류 시 잠기기 시작한 시간
  }

  interface I_Policy {
    includeUserId: number; // 아이디 포함금지 val) 1:활성화,0:비활성화
    includeNumeric: number; // 비밀번호 필수 포함(숫자) val) 1:활성화,0:비활성화
    includeUserTel: number; // 전화번호 포함금지 val) 1:활성화,0:비활성화
    includeAlphabet: number; // 비밀번호 필수 포함(영문) val) 1:활성화,0:비활성화
    passwordMinLength: number; //  패스워드 최소길이
    includeSpecialChar: number; // 비밀번호 필수 포함(특수문자) val) 1:활성화,0:비활성화
    includeCtnoCharacter: number; // 연속된 문자 입력금지 val) 1:활성화,0:비활성화
    includeSameCharacter: number; // 동일문자 입력금지 val) 1:활성화,0:비활성화
    includeCtnoCharacterCnt: number; // 연속된 문자 입력금지 갯수
    includeSameCharacterCnt: number; // 동일문자 입력금지 갯수
    includeCapitalSmallOver: number; // 영문대소문자 1자이상 val) 1:활성화,0:비활성화
    includeCapitalSmallOverCnt: number /** 영문 대소문자 n자 갯수  */;
  }

  interface I_Rule {
    GATEWAY: string; // 게이트웨이 정규 표현식
    PORT: string; // 포트
    REQUIRE_INTEGER: string; // 숫자 필수
    PHONE: string; // 핸드폰
    DOMAIN: string; // 도메인
    IP: string; // IP
    USER_NAME: string; // 사용자 이름
    EMAIL: string; // 이메일
    ALPHABET: string; // 알파벳
    GROUP_NAME: string; // 그룹이름
    REQUIRE_STR: string; // 글자 필수
    HOSTNAME: string; // 호스트 이름
    CERTCODE: string; // 인증서코드
    IPB: string; // 서브넷마스크 추가한 IP 정규식
    ID: string; // 올바른 ID
    INTEGER: string; // 숫자
    ALARM_NAME: string; // 자산 알람이나 시스템알람 이름
    GROUP_ENG_NAME: string; // 그룹 영어 이름
    NOTVALID_ID: string; // 사용자 등록, 수정에 쓰는 ID 밸리데이션 --- 소영 추가
    URL: string; // url 패턴 --- 소영 추가
    PASSWORD: string; // 로그인 Password  - 재용 추가
  }

  // 시스템 설정
  interface I_Config {
    agentUpgradeLimitCount: number; // 사이드바-기타작업- agentUpgrade 일때 limitCnt
    defaultDashGraph: string; // 대시보드 디폴트 그래프 표시 hour, day, week, period
    defaultDashPeriodDate: number; // 대시보드 기간지정 기준일 epoch(기간지정탭의 startDate)
    isDetectSoundAlarm: number | null; // 탐지알림음 설정 0:사용안함 1:알람1 2:알람 2
    isDetectTwinkle: number | null; // 탐지 경고 사용유무 -1:무제한 0:사용안함 1~:깜빡임 횟수
    systemConfigNo: number; // 시스템 설정 고유키
    smsFrom: null | string; // sms 보내는 휴대폰번호
    smtpFrom: null | string; // mail 보내는 메일주소
    loginLimit: number; // 비밀번호 만료기간
    loginFailCountLimit: number; // 비밀번호 실패 최대 횟수
    smsCountLimit: number; // sms 인증메세지 발송 최대 횟수
    extraInfo: string; // 비밀번호 생성 규칙 json
    smsType: 1 | 2; // sms 발송 방법 1:coolsms,2:socket
    otpLoginInfo: string; // 'otp인증 사용 여부 { "isEnable": "0", // OTP인증사용여부 0:사용안함 1:사용 "type": "1", // 1:전체, 2:허용IP대역 3:제외할IP대역 "ipList": [ { "startIp": "1.1.1.1", //IP대역 시작IP "endIp": "1.1.1.2" //IP대역 끝IP }, { "startIp": "1.1.1.3", "endIp": "1.1.1.5" } ] }'
    smsUse: number; // SMS 사용여부 (0:사용안함, 1:사용)
    firstUserPassword: 0 | 1; // 사용자등록 패스워드 설정(0:사용안함, 1:사용)
    ssTitleTag: string; // 솔루션 타이틀 태그
    excludeContent: 0 | 1; // 탐지내용 제외여부 1: 제외 0:제외안함
    defaultRuleNo: number; // 디폴트 정책 번호(자동탐지, 일괄등록시 사용)
    defaultDetectDateType: 1 | 2 | 3; // 탐지내역 기간 필터 기본값 1: 최근일주일 2:최근한달 3:최근일년
    modifyLockLimitCnt: number; // 내정보 수정 비밀번호 확인 틀린 횟수
    modifyLockTime: number; // 내 정보 수정 잠금 시간 (5분 고정)
    detectUrlUse: 0 | 1; // 악성 URL타입 설정
    adUse: number; // ad 계정 관련
    excludeDetectExt: string; // 탐지 예외 기본 확장자 key: type,value:확장자
    defaultWebshellExt: string; // 윕쉘 탐지 기본 확장자 key: type,value:확장자
  }

  type T_MenuAccess =
    | 'fullScan' /** 메인화면 > 사이드바 > 전수검사 */
    | 'uploadDetect' /** 메인화면 > 사이드바 > 탐지내역 업로드 */
    | 'noGroup' /** 메인화면 > 사이드바 > 그룹미설정 */
    | 'dashBoard' /** 메인화면 > 사이드바 > 대시보드 */
    | 'dirCollect' /** 메인화면 > 사이드바 > 기타작업 > 디렉터리 수집 */
    | 'autoScanDir' /** 메인화면 > 사이드바 > 기타작업 > 탐지 디렉터리 자동등록 */
    | 'patternUpdate' /** 메인화면 > 사이드바 > 기타작업 > 패턴 업데이트 */
    | 'agentUpdate' /** 메인화면 > 사이드바 > 기타작업 > Agent 업그레이드 */
    | 'agentRestart' /** 메인화면 > 사이드바 > 기타작업 > Agent 재시작 */
    | 'logCollect' /** 메인화면 > 사이드바 > 기타작업 > 로그 수집 */
    | 'moveAsset' /** 메인화면 > 2열 > 소속 그룹 설정 */
    | 'settingAgent' /** 메인화면 > 자산정보 > 자산설정 > 자산 */
    | 'settingWebroot' /** 메인화면 > 자산정보 > 자산설정 > Webroot */
    | 'settingAlarm' /** 메인화면 > 자산정보 > 자산설정 > 알림 */
    | 'detectWork' /** 메인화면 > 탐지목록 > 탐지목록 */
    | 'exceptSource' /** 메인화면 > 탐지관리 > 예외소스 관리 */
    | 'jobInfoWork' /** 메인화면 > 작업내역 > 작업내역 */
    | 'jobPlanWork'; /** 메인화면 > 작업내역 > 예약작업 */
}
