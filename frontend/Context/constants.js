import erc20ABI from './json/erc20.json';
import lookUpABI from './json/lookup.json';

const ERC20Generator_Address = '0x205Cfc23ef26922E116135500abb4B12Ab6d4668'
const LookupContract_Address = '0xbB57FE325e769DEDB1236525a91cDEd842143fA7'
const ERC20Generator_ABI = erc20ABI.abi
const LookupContract_ABI = lookUpABI.abi


export {
    ERC20Generator_ABI,
    LookupContract_ABI,
    ERC20Generator_Address,
    LookupContract_Address
}