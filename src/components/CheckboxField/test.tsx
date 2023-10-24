import { describe, test, expect } from 'vitest'
import { screen } from '@testing-library/react'

import { CheckboxField, CheckboxFieldProps } from '.'
import { render } from '~/utils/tests/render'
import { FakeForm } from '~/utils/FakeForm'

describe('<CheckBox />', () => {
	const factory = (props: CheckboxFieldProps) => {
		render(
			<FakeForm>
				<CheckboxField {...props as any} />
			</FakeForm>
		)
	}

	test('should a render something', () => {
		factory({ label: 'test', name: 'test' })
		expect(screen.getByRole('checkbox')).toHaveStyle('appearance: none')
	})
})
