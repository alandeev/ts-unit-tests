import { getId } from './index'

jest.mock('./index');

const mockGetId = getId as jest.Mock
describe('utils', () => {
    it('shoud return id when call getId', () => {
        mockGetId.mockReturnValue('mocked-id')

        const id = getId(false)

        expect(id).toBe('mocked-id');
    })
})