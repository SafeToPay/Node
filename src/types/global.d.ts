type AnyCase<T extends string> =
    string extends T ? string :
    T extends `${infer F1}${infer F2}${infer R}` ? (
        `${Uppercase<F1> | Lowercase<F1>}${Uppercase<F2> | Lowercase<F2>}${AnyCase<R>}`
    ) :
    T extends `${infer F}${infer R}` ? `${Uppercase<F> | Lowercase<F>}${AnyCase<R>}` :
    ""

type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

type Seconds = number;

type Milliseconds = number

type NumericalString = `${number}`;

type ParseInt<T> = T extends `${infer N extends number}` ? N : never;

type Tuple<T, N extends number> = TupleImpl<T, N>;

type TupleImpl<T, N extends number, U extends T[] = []> =
  N extends U["length"]
  ? U
  : TupleImpl<T, N, [T, ...U]>;


type IsInteger<N extends number> = `${N}` extends `${string}.${string}`
  ? never
  : `${N}` extends `-${string}.${string}`
  ? never
  : number;

type RangePositiveImpl<
  Start extends number,
  End extends number,
  T extends void[] = Tuple<void, Start>
> = End extends T["length"]
  ? End
  : T["length"] | RangePositiveImpl<Start, End, [void, ...T]>;

type OneToNineType = RangePositiveImpl<1, 9>;

type DateYearType = `19${NumericalString}${NumericalString}` | `20${NumericalString}${NumericalString}`;
type DateMonthType = `0${OneToNineType}` | `1${RangePositiveImpl<0, 2>}`;
type DateDayType = `${0}${OneToNineType}` | `${1 | 2}${NumericalString}` | `3${0 | 1}`;
type DateSeparatorType = '-';

type DateType = `${DateYearType}-${DateMonthType}-${DateDayType}`;
type TimeHourType = `${0 | 1}${NumericalString}` | `2${RangePositiveImpl<0, 3>}`;
type TimeMinuteType = `${RangePositiveImpl<0, 5>}${NumericalString}`;
type TimeSecondType = `${RangePositiveImpl<0, 5>}${NumericalString}`;
type TimeSeparatorType = ':';
type TimeType = `${TimeHourType}:${TimeMinuteType}:${TimeSecondType}`;
type DateTimeType = `${DateType} ${TimeType}`;
type TimestampType = number;


type _NumbersToNRec<
    Nr extends number,
    Counter extends any[],
    Accumulator extends number
    > =
    Counter['length'] extends Nr ?
        Accumulator :
        _NumbersToNRec<Nr, [any, ...Counter], Accumulator | Counter['length']>;

type NumbersToN<
    Nr extends number
    > =
    Nr extends Nr ?
        number extends Nr ?
            number :
            Nr extends 0 ?
                never :
                _NumbersToNRec<Nr, [], 0> :
        never;

type NrRange<
        Start extends number,
        End extends number
        > =
        Exclude<NumbersToN<End>, NumbersToN<Start>>;
