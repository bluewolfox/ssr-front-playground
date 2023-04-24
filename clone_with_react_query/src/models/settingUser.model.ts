/**
 * 1. 컴포넌트 : client\src\models\setting\page\settingUser.model.ts
 * 2. 작성일 : 2022.09.20 / 14시 37분 18초
 * 3. 작성자 : 홍예림
 * 4. 설명 : 설정 사용자 관리 타입지정
 */

export declare namespace M_SettingUser {
  interface I_User {
    rowNum: number /** 번호 */;
    userNo: number /** 사용자번호 */;
    userType: number /** 사용자타입 1:관리자 101:일반사용자 */;
    userRole: string /** 사용자권한 ROLE_MASTER:최고관리자 ROLE_ADMIN:일반관리자 ROLE_USER:일반사용자 */;
    userRoleStr: string /** 사용자 타입 string */;
    userId: string /** 사용자 아이디  */;
    newUserId: string /** 최고 관리자 아이디 수정 */;
    userName: string /**  사용자 이름 */;
    userEmail: string /** 사용자 이메일 */;
    userTel: string /** 사용자 전화번호  */;
    userDept: string /** 사용자 부서 */;
    userDuty: string /** 사용자 직책 */;
    additionalInfo: string /** 추가 정보 */;
    userStatus: number /** 사용자 상태 1:정상 2:중지 3:잠김 */;
    userStatusStr: string /** 사용자 상태 string */;
    loginFailCount: number /** 로그인 실패 횟수 */;
    loginFailCountStr: string /** 로그인 실패 횟수 string */;
    multiLogin: number /** 중복로그인 허용여부 1:허용 0:허용안함 */;
    multiLoginStr: string /** 중복로그인 허용여부 string  */;
    isAdUser: number /** AD 연동계정 여부 1:연동 0:연동안함 */;
    isAdUserStr: string /** AD 연동계정 여부 string */;
    menuAccessTemplateNo: number /** 메뉴 접근 템플릿 번호 */;
    regEpoch: number /** 등록일 Epoch */;
    pwModifyEpoch: number /** 비밀번호변경일 Epoch */;
    pwModifyDateStr: string /** 비밀번호변경일 날짜포맷 string */;
    modifyLockEpoch: number /** 사용자정보 수정 잠금일자 Epoch */;
    isAutolockExcept: number; // 자동 잠김
    isAgree: number; // 삭제 확인 1 동의 0 비동의
    isDormantUser: number; // 휴면 계정
    userGroupList: string | null; // 사용자 소속 그룹 (Json)
    accessIp: string | null; // accessIp
  }

  interface I_ADUser {
    userId: string; // 사용자 아이디
    userName: string; // 사용자 이름
    userEmail: string; // 사용자 이메일
    adUserAccount: string; // AD 인증 계정
    userTel: string; // 사용자 전화번호
    userDept: string; // 사용자 부서
    userDuty: string; // 사용자 직책
  }

  interface I_ADLink {
    adInfo: {
      // AD 연동 설정 정보
      info: {
        file: File | null;
        dn: string;
        id: string;
        ip: string;
        keyStore: string;
        keyStorePass: string;
        pass: string;
        port: string;
      };
      isConnection: number;
      isEnable: number;
    };
    adUse: number; // AD 연동 사용유무 1:사용 0:사용안함
  }

  interface I_Group {
    rowNum: number; // 번호
    userGroupNo: number; // 사용자 그룹번호
    groupName: string; // 사용자 그룹명
    groupDescription: string; // 사용자 그룹 설명
    regEpoch: number; // 등록 일시
    agCount: number; // 연결된 자산그룹 수
    agNameList: string[]; // 연결된 자산그룹 명
    isPrivilege: number; // ?
    isSystem: number; // 시스템 자동 등록여부 1:시스템등록
    uiCount: number; // 등록된 사용자 수
    userEmail: null | string; // 사용자 이메일
    userId: null | string; // 사용자 아이디
    userStatus: null | string; // 사용자 상태 1:정상 2:중지 3:잠김
  }

  interface I_Registered {
    rowNum: number; //	번호
    userNo: number; //	사용자 번호
    userId: string; //	사용자 아이디
    userName: string; //	사용자 이름
    userEmail: string; //	사용자 이메일
    userTel: string; //	사용자 전화번호
    userDept: string; //	사용자 부서
    userDuty: string; //	사용자 직책
    userStatus: number; //	사용자 상태 1:정상 2:중지 3:잠김
    regEpoch: number; //	등록일시(EPOCH)
  }

  interface I_UnRegistered {
    rowNum: number; //	번호
    userNo: number; //	사용자 번호
    userId: string; //	사용자 아이디
    userName: string; //	사용자 이름
    userEmail: string; //	사용자 이메일
    userTel: string; //	사용자 전화번호
    userDept: string; //	사용자 부서
    userDuty: string; //	사용자 직책
    userStatus: number; //	사용자 상태 1:정상 2:중지 3:잠김
    regEpoch: number; //	등록일시(EPOCH)
    userType: number;
  }

  interface I_UserList {
    rowNum: number;
    userNo: number /** 유저 번호  */;
    userId: string /** 유저 ID */;
    userEmail: string /** 유저 이메일 */;
    userName: string /** 유저 이름 */;
    userType: number /** 사용자타입 1:관리자 101:일반사용자 */;
  }
}
