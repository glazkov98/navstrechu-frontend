import type { TestVariantItemInterface } from './test-variant-item.interface'

export interface TestItemInterface {
    id: number
    title: string
    activeVariant: number | null
    variants: TestVariantItemInterface[]
}
