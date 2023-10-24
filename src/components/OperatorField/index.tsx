import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react'
import * as S from './styles'
import { IconChip, Typography } from '..'
import { isArrayFilled, uniqueKey } from '~/utils'
import { type ForwardInput, useInput, useCarrierImg } from '~/hook'

export type OperatorItem = {
  name: string
  icon: string
  value: string
}

export type OperatorFieldProps = {
  name: string
  label?: string
  onChange?: () => void
  items?: OperatorItem[]
} & JSX.IntrinsicElements['input']

const Input: ForwardInput<OperatorFieldProps> = (
  {
    name,
    label = 'Selecione a operadora',
    onChange,
    items,
    ...rest
  }: OperatorFieldProps,
  ref
) => {
  const [selected, setIsSelected] = useState<string>('')

  const { clearError, defaultValue, error, fieldName, inputRef } = useInput(
    name,
    ref
  )

  const { handleImages, images, loading } = useCarrierImg()

  const handleOnClick = useCallback(
    (value: string) => () => {
      inputRef.current!.value = value

      clearError()
      setIsSelected(value)

      if (onChange) onChange()
    },
    [inputRef, onChange]
  )

  const values = useMemo(
    () =>
      items?.map(({ name, value }, i) => {
        return (
          <IconChip
            key={uniqueKey('operator_chip', i, value)}
            icon={images[name]!}
            label={name}
            borderColor={selected === value ? 'primary300' : 'gray1'}
            onClick={handleOnClick(value)}
            as="img"
            loading={loading}
          />
        )
      }),
    [selected, items, loading, images, onChange, handleOnClick]
  )

  useEffect(() => {
    if (defaultValue) setIsSelected(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    if (isArrayFilled(items)) {
      handleImages(items!)
    }
  }, [items])

  return (
    <S.Wrapper>
      <S.FaultInput
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...(rest as any)}
      />
      <Typography as="h5" color="gray7" semibold>
        {label}
      </Typography>
      <S.Content>{values}</S.Content>
      {error && (
        <Typography as="small" color="error" semibold>
          {error}
        </Typography>
      )}
    </S.Wrapper>
  )
}

export const OperatorField = forwardRef(Input)
