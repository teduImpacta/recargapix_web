import { useCallback, type ReactNode } from 'react'
import * as S from './styles'
import { Button, Icon, Typography } from '..'

export type ModalProps = {
  children: ReactNode | JSX.Element
  title: string
  label?: string
  isOpen?: boolean
  handleOpen?: () => void
  cancelable?: boolean
  actionLabel?: string
  actionClick?: () => void
  cancelClick?: () => void
  loading?: boolean
}

export const Modal = ({
  title,
  label,
  children,
  handleOpen,
  isOpen,
  cancelable,
  actionLabel = 'Confirmar',
  cancelClick,
  actionClick,
  loading
}: ModalProps) => {
  const handleOpenClick = useCallback(() => {
    if (handleOpen) handleOpen()
  }, [handleOpen])

  const handleActionClick = useCallback(() => {
    if (actionClick) actionClick()
  }, [actionClick])

  const handleCancelClick = useCallback(() => {
    if (cancelClick) {
      cancelClick()
    } else {
      handleOpenClick()
    }
  }, [cancelClick])

  return (
    <S.Wrapper aria-hidden={!isOpen} isOpen={isOpen}>
      <S.Content aria-hidden={!isOpen}>
        <S.Top>
          <Typography as="h3" color="gray8" bold>
            {title}
          </Typography>
          <S.Close onClick={handleOpenClick}>
            <Icon icon="close" />
          </S.Close>
        </S.Top>
        {label && <Typography as="h5">{label}</Typography>}
        <S.Body>{children}</S.Body>
        <S.Actions isCancelable={cancelable}>
          <Button text onClick={handleCancelClick} loading={loading}>
            Cancelar
          </Button>
          <Button onClick={handleActionClick} loading={loading}>
            {actionLabel}
          </Button>
        </S.Actions>
      </S.Content>
    </S.Wrapper>
  )
}
