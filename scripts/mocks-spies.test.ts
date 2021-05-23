import main from './mocks-spies';
import * as utils from './utils'


describe('mocks-spies', () => {
    const getId = jest.spyOn(utils, 'getId')

    it('should return id when isThrow=false and call=true ', async () => {
        getId.mockReturnValue('mocked-uuid')

        const id = await main(false, true);
        expect(getId).toHaveBeenCalledTimes(1);
        expect(getId).toHaveBeenCalledWith(false)
        
        expect(id).toBe('mocked-uuid')
    })

    it('should throw when isThrow=true and call=true', async () => {
        main(true, true).then(() => {
            expect(1).toBe(2);
        }).catch(error => {
            expect(error instanceof Error).toBe(true);
        });
    })

    it('should return null when isThrow=false', async () => {
        const result = await main(false, false);
    
        expect(result).toBeNull();
    })
})