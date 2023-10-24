import { useEffect, useRef } from 'react'
import * as S from './styles'
import { Icon, Typography } from '..'
import { type Theme } from '~/themes'
import FaultCarrier from '~/assets/svg/fault_carrier.svg'

type PickColor<K extends keyof Theme['colors']> = keyof Pick<Theme['colors'], K>

export type IconChipProps = {
  icon?: string
  label: string
  color?: PickColor<'gray8' | 'gray9'>
  text?: boolean
  borderColor?: PickColor<'gray1' | 'primary300'>
  as?: 'img' | 'icon'
  loading?: boolean
} & JSX.IntrinsicElements['div']

export const IconChip = ({
  icon,
  label,
  color = 'gray9',
  text = false,
  borderColor = 'gray1',
  as = 'img',
  loading,
  ...rest
}: IconChipProps) => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onerror = () => {
        imgRef.current!.src = FaultCarrier as any
      }
    }
  }, [imgRef])

  return (
    <S.Wrapper
      data-testid="icon_chip"
      text={text}
      borderColor={borderColor}
      {...(rest as any)}
    >
      {loading && <S.Loading />}
      {!loading && icon && (
        <>
          {as === 'icon' && <Icon icon={icon} />}
          {as === 'img' && <img ref={imgRef} src={icon} alt={label} />}
        </>
      )}
      {!loading && !icon && <Icon icon="fault_carrier" />}
      <Typography as="text" color={color} bold>
        {label}
      </Typography>
    </S.Wrapper>
  )
}
