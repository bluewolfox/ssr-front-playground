/**
 * 1. 컴포넌트 : client\src\common\custom\DatePicker.tsx
 * 2. 작성일 : 2023.02.17 / 10시 57분 19초
 * 3. 설명 : 커스텀 antd 날짜 피커 DatePicker
 */

import React from 'react';
import { DatePicker as Antd_DatePicker, DatePickerProps } from 'antd';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { MonthPickerProps, RangePickerProps, WeekPickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import { MdOutlineDateRange } from 'react-icons/md';

const commonConfig = {
  locale: {
    ...locale,
    lang: {
      ...locale.lang,
      yearFormat: 'YYYY년',
      monthFormat: 'MM월',
      shortWeekDays: ['일', '월', '화', '수', '목', '금', '토'],
    },
  },
  suffixIcon: <MdOutlineDateRange />,
  allowClear: false,
};
/** datepicker 기본 세팅 => props가 오버라이딩 되면 props 우선 적용 */
const commonDateConfig: DatePickerProps & WeekPickerProps & MonthPickerProps = {
  defaultValue: dayjs(),
};
/** rangePicker 기본 세팅 => props가 오버라이딩 되면 props 우선 적용 */
const commonRangeConfig: RangePickerProps = {
  separator: <>~</>,
  defaultValue: [dayjs().add(-1, 'day'), dayjs()],
};

const rangeConfig = { ...commonConfig, ...commonRangeConfig };
const dateConfig = { ...commonConfig, ...commonDateConfig };

export const RangePicker: React.FC<RangePickerProps> = (props): JSX.Element => {
  return <Antd_DatePicker.RangePicker {...rangeConfig} {...props} />;
};
export const DatePicker: React.FC<DatePickerProps> = (props): JSX.Element => {
  return <Antd_DatePicker {...commonConfig} {...props} />;
};
export const WeekPicker: React.FC<WeekPickerProps> = (props): JSX.Element => {
  return <Antd_DatePicker.WeekPicker {...dateConfig} {...props} />;
};
export const MonthPicker: React.FC<MonthPickerProps> = (props): JSX.Element => {
  return <Antd_DatePicker.MonthPicker {...dateConfig} {...props} />;
};
export const YearPicker: React.FC<DatePickerProps> = (props): JSX.Element => {
  return <Antd_DatePicker.YearPicker {...dateConfig} {...props} />;
};
