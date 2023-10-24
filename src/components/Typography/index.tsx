import { useCallback, type ReactNode } from 'react'
import * as S from './styles'
import { type Theme } from '~/themes'

export type TypographyProps = {
  as?: keyof Theme['typography']
  color?: keyof Theme['colors']
  bold?: boolean
  semibold?: boolean
  children?: ReactNode
  loading?: boolean
} & JSX.IntrinsicElements['div']

export const Typography = ({
  as = 'text',
  bold,
  color = 'gray7',
  semibold,
  children,
  loading,
  ...rest
}: TypographyProps) => {
  const getType = useCallback(() => {
    switch (as) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
        return as
      case 'label':
      case 'text':
      case 'small':
        return 'p'
      default:
        throw new Error('as type does not exist in typography theme!')
    }
  }, [as])

  const getWeight =
    useCallback((): keyof Theme['fonts']['default']['styles'] => {
      if (bold) return 'bold'
      if (semibold) return 'semibold'
      return 'regular'
    }, [bold, semibold])

  return (
    <S.Wrapper
      color={color}
      typography={as}
      weight={getWeight()}
      data-testid="typography"
      data-loading={!!loading}
      {...(rest as any)}
    >
      <S.Text as={getType()}>{children}</S.Text>
      <span className="loading" />
    </S.Wrapper>
  )
}
