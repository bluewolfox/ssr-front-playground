import { M_Global } from 'models/global';

type T_ExtensionRuleKey = keyof M_Global.I_Rule;
export type Rules =
  | 'noSpace'
  | 'required'
  | 'email'
  | 'phone'
  | 'ip'
  | 'name'
  | 'searchAssetNo'
  | 'searchIP'
  | 'domain'
  | 'ipOrDomain'
  | 'dollarSign'
  | 'backslashSign'
  | 'dirError'
  | 'extension'
  | 'url'
  | ({ [key: string]: number } | T_ExtensionRuleKey);

type Message = (value: string, compValue: number, option?: number) => string;

export const regExp = {
  noSpace: /\s+/, // 공백없음
  required: /^\s*$/, //
  ip: /^(?:25[0-5]|^2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/,
  rangeIp:
    /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}(?:\/\d+)*|(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}[ \t]*[~-][ \t]*(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})$/,
  email: /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.)+[A-Za-z]{2,63}$/,
  name: /^([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]+\s{0,1})*[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_\-()]+$/,
  score: /(^[0-9]{1}$|^[0-9]{1}[0-9]{1}$|^100$)/, // 0~100 자연수
  phone: /^\d{2,3}-?\d{3,4}-?\d{4}$/,
  searchAssetNo: /^([0-9],?)+$/,
  searchIP: /^([0-9].?)+$/,
  domain: /^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/,
  backslashSign: /\\/,
  dollarSign: /\$/,
  dirError: /[.]{2}/,
  extension: /^[A-Za-z0-9]+$/,
  url: /^[A-Za-z0-9-._!$'()*+!,]+$/,
  // url: /([A-Za-z0-9]{1}[-._!$'()*+!,]*){3}/,
};

interface Extends {
  [key: string]: {
    regExp: (value: string, compValue?: number) => boolean;
    message: string | Message;
  };
}

// 룰 설정 ####################################
// 추가 되는 룰들 주석 필수.
let extend: Extends = {
  noSpace: {
    regExp: (value: string): boolean => value.length > 0 && !!value.match(regExp.noSpace),
    message: '띄어쓰기 불가',
  },
  required: {
    regExp: (value: string): boolean => !!value.match(regExp.required),
    message: '필수 정보입니다.',
  },
  name: {
    regExp: (value: string): boolean => !value.match(regExp.name),
    message: '사용불가 문자가 포함되어 있습니다. 한글, 영대소문자, 숫자, (, ), -, _ 만 입력이 가능합니다.',
  },
  email: {
    regExp: (value: string): boolean => !value.match(regExp.email),
    message: '올바르지 않은 이메일 형식입니다.',
  },
  phone: {
    regExp: (value: string): boolean => !value.match(regExp.phone),
    message: '올바르지 않은 연락처 형식입니다.',
  },
  searchAssetNo: {
    regExp: (value: string): boolean => value.length > 0 && !value.match(regExp.searchAssetNo),
    message: `숫자와 쉼표(',')로 구분해서 입력해야 합니다.ex)12,54,1`,
  },
  searchIP: {
    regExp: (value: string): boolean => value.length > 0 && !value.match(regExp.searchIP),
    message: `숫자와 점('.')만 입력 할 수 있습니다.`,
  },

  min: {
    regExp: (value: string, compValue?: number): boolean => {
      if (Number.isNaN(+value)) return true;
      return compValue !== undefined ? +value < +compValue : false;
    },
    message: (value: string, compValue: number, max?: number) => {
      if (Number.isNaN(+value)) return '숫자만 입력 가능합니다.';
      return max
        ? `${compValue} ~ ${max} 사이의 숫자만 입력 가능합니다.`
        : `${compValue} 이상의 값만 입력할 수 있습니다.`;
    },
  },
  max: {
    regExp: (value: string, compValue?: number): boolean => {
      if (Number.isNaN(+value)) return true;
      return compValue !== undefined ? +value > +compValue : false;
    },
    message: (value: string, compValue: number, min?: number) => {
      if (Number.isNaN(+value)) return '숫자만 입력 가능합니다.';
      return min
        ? `${min} ~ ${compValue} 사이의 숫자만 입력 가능합니다.`
        : `${compValue} 이하의 값만 입력할 수 있습니다.`;
    },
  },
  minLength: {
    regExp: (value: string, compValue?: number): boolean => {
      return compValue !== undefined ? value.length < +compValue : false;
    },
    message: (value: string, compValue: number, max?: number) => {
      return max
        ? `${compValue} ~ ${max} 자 이내로 입력할 수 있습니다.`
        : `${compValue} 자 이상으로 입력할 수 있습니다.`;
    },
  },
  maxLength: {
    regExp: (value: string, compValue?: number): boolean => {
      return compValue !== undefined ? value.length > +compValue : false;
    },
    message: (value: string, compValue: number, min?: number) => {
      return min ? `${min} ~ ${compValue} 자 이내로 입력할 수 있습니다.` : `${compValue} 자 이내로 입력할 수 있습니다.`;
    },
  },
  /** domain 형식 - 예림 */
  domain: {
    regExp: (value: string): boolean => !value.trim().match(regExp.domain),
    message: '도메인 형식에 맞지 않습니다.',
  },
  /** ip 형식 또는 domain 형식 을 참조(메일발송 HostIp 사용용도) - 예림 */
  ipOrDomain: {
    regExp: (value: string): boolean => !value.trim().match(regExp.ip) && !value.trim().match(regExp.domain),
    message: 'ip 형식에 맞지 않습니다.',
  },
  /** ₩ 사용 금지 - 탐지 제외 확장자 -안소희- */
  backslashSign: {
    regExp: (value: string): boolean => !!value.match(regExp.backslashSign),
    message: '₩ (backslash)는 사용 할 수 없습니다.',
  },
  /** $ 사용 금지 - 탐지 제외 확장자 -안소희- */
  dollarSign: {
    regExp: (value: string): boolean => !!value.match(regExp.dollarSign),
    message: '$ (dollar sign)는 사용 할 수 없습니다.',
  },
  /** .. 사용 금지 - 디렉터리 참조 - 예림 */
  dirError: {
    regExp: (value: string): boolean => !!value.match(regExp.dirError),
    message: '(..) 문자는 사용할 수 없습니다.',
  },
  /** 영문,숫자만 - 정책 추가 - 안소희 */
  extension: {
    regExp: (value: string): boolean => !value.match(regExp.extension),
    message: '영문자, 숫자만 입력 가능합니다.',
  },
  url: {
    regExp: (value: string): boolean => !value.match(regExp.url),
    message: '사용불가 문자가 포함되어 있습니다.',
  },
};

export const validator = {
  excute: (
    rules: Rules[],
    value: string,
    rulesMsg?: { [key: string]: string } // 바꾸고싶은 에러메세지가 있을 경우 Rule의 key와 value를 넣어준다. ex) ruleMsg:{required:'취소사유는 필수 입력입니다.'}
  ): { validError: string; rule: string } => {
    // 메세지가 있는 Rule의 키 가공
    const rulesMsgKeys = rulesMsg ? Object.keys(rulesMsg) : [];

    let validError = '';
    let returnRule: string | string[] = '';
    rules.some((rule: string | { [key: string]: number | ((value: string) => string) }): boolean => {
      if (typeof rule === 'undefined') return false;
      if (typeof rule === 'object') {
        const objArr = Object.entries(rule);

        objArr.forEach(([key, compValue]) => {
          if (typeof compValue === 'function') {
            validError = compValue(value);
            returnRule = key;
            return true;
          }

          if (typeof compValue !== 'function' && extend[key].regExp(value, compValue)) {
            const message = extend[key].message as Message;
            if (key === 'min') {
              const max = objArr.find(([key]) => key === 'max');
              const maxValue = max && typeof max[1] === 'number' ? max[1] : undefined;
              validError = message(value, compValue, maxValue);
            } else if (key === 'max') {
              const min = objArr.find(([key]) => key === 'min');
              const minValue = min && typeof min[1] === 'number' ? min[1] : undefined;
              validError = message(value, compValue, minValue);
            } else if (key === 'minLength') {
              const maxLength = objArr.find(([key]) => key === 'maxLength');
              const maxLengthValue = maxLength && typeof maxLength[1] === 'number' ? maxLength[1] : undefined;
              validError = message(value, compValue, maxLengthValue);
            } else if (key === 'maxLength') {
              const minLength = objArr.find(([key]) => key === 'minLength');
              const minLengthValue = minLength && typeof minLength[1] === 'number' ? minLength[1] : undefined;
              validError = message(value, compValue, minLengthValue);
            } else {
              validError = message(value, compValue);
              returnRule = `${key}${compValue}`;
              return true;
            }
          }
          return false;
        });
        if (validError) return true;
      }

      if (typeof rule !== 'object' && extend[rule]?.regExp(value)) {
        validError = extend[rule].message as string;
        returnRule = rule;
        return true;
      }
      return false;
    });

    if (returnRule && rulesMsg && rulesMsgKeys.length && rulesMsgKeys.includes(returnRule))
      validError = rulesMsg[returnRule];

    return { validError, rule: returnRule };
  },
  extensions: (propExtend: Extends) => {
    extend = { ...extend, ...propExtend };
  },
};
