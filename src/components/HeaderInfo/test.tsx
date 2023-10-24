import { describe, test, expect, beforeAll } from 'vitest'
import { screen } from '@testing-library/react'

import { HeaderInfo, type HeaderInfoProps } from '.'
import { renderWithTheme } from '~/utils/render'
import { useInfo } from '~/providers'
import { useEffect } from 'react'
import { act } from 'react-dom/test-utils'
import { phoneWithDDDMask } from '~/utils'
import { carriersStorage } from '~/config'
import { Form } from '@unform/web'

const cellphone = '11912345678'

describe('<HeaderInfo />', () => {
  beforeAll(() => {
    carriersStorage.set([
      {
        id: 1,
        logo: '',
        nome: 'Claro',
        valoresMarca: [
          {
            produtoGradeId: 1,
            valor: 10
          }
        ]
      }
    ])
  })

  const factory = (props: HeaderInfoProps) => {
    const Component = () => {
      const { handleInfo } = useInfo()

      useEffect(() => {
        handleInfo({
          cellphone,
          operator: {
            id: 1,
            logo: '',
            nome: 'claro',
            valoresMarca: []
          },
          value: {
            produtoGradeId: 1,
            valor: 10
          }
        })
      }, [])

      return (
        <Form onSubmit={() => {}}>
          <HeaderInfo {...props} />
        </Form>
      )
    }

    renderWithTheme(<Component />)
  }

  test('should be able a render basic props', () => {
    act(() => {
      factory({
        page: 'values'
      })
    })

    expect(screen.getAllByRole('heading')).toHaveLength(6)
  })

  test('should be able a render basic info', () => {
    act(() => {
      factory({
        page: 'values'
      })
    })

    expect(screen.getByText('Claro')).toBeInTheDocument()
    expect(screen.getByText(phoneWithDDDMask(cellphone))).toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(6)
  })
})
