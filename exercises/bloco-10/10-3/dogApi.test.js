// exercicio 6

const dogApi = require('./dogApi');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('testing dogApi function', () => {

    fetch.mockImplementation(() => {
        return new Promise((resolve, reject) => {
            resolve( {json: () => 'request success'});
            reject( {json: () => 'request failed'});
        })
    })

    const spyed = jest.spyOn(dogApi, 'dogApi');

    
    it('should return sucess', async () => {
        spyed.mockResolvedValue('request success');
    })
    
    it('should return failed', async () => {
        spyed.mockRejectedValue('request failed');
    })

})
