export const time2Min = (val: string): number => {
  let res = 0
  const [hours, minutes] = val.split(':')
  try {
    res = Number(hours) * 60 + Number(minutes)
  } catch (e) {
    console.error('Invalid input time', e)
  }
  return res
}

export const min2Time = (val: number): string => {
  const hours = ('0' + Math.floor(Number(val) / 60)).slice(-2)
  const minutes = ('00' + (Number(val) % 60)).slice(-2)
  return `${hours}:${minutes}`
}

export const price2String = (
  val: number,
  decimalSymbol: string = ',',
  showDecimals: boolean = false
): string => {
  const [int, decimal = showDecimals ? '00' : ''] = `${string2Price(
    String(val)
  )}`.split('.')
  return `${int}${decimal.length ? decimalSymbol : ''}${decimal}`
}

export const string2Price = (val: string): number => {
  let num = Number(val)

  let decimals =
    Math.floor(num) === num
      ? 0
      : ((num.toString().split('.') || [])[1] || '').length || 0

  if (decimals > 0) num = parseFloat(num.toFixed(2))

  return num
}

export const priceFormat = (
  symbol: string,
  value: string = '',
  decimalSymbol: string = ','
): string => {
  let res = '0.00'

  let t = value.replace(/[^,.0-9]/g, '').replace('.', decimalSymbol)
  const [int = '', decimals = ''] = String(t).split(decimalSymbol)

  res = `${int}${
    decimals.length || symbol === decimalSymbol ? decimalSymbol : ''
  }${decimals.length > 2 ? decimals.substring(0, 2) : decimals}`
  return res
}
