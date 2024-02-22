import "../../api/ledger/server/triangule.js";
import "../../api/chain/server/triangule.js";
import "../../api/chain/server/customs.js";


import "../../api/accounts/server/methods.js";

pubkeyToBech32: function(pubkey, prefix) {
        let buffer;

        try {
            if (pubkey["@type"].indexOf("ed25519") > 0){
            // '1624DE6420' is ed25519 pubkey prefix
                let pubkeyAminoPrefix = Buffer.from('1624DE6420', 'hex');
                buffer = Buffer.alloc(37);

                      return bech32.encode(prefix, bech32.toWords(buffer))
        }
        catch (e){
            console.log("Error converting from pubkey to bech32: %o\n %o", pubkey, e);
            return false
        }
                  return buffer.slice(pubkeyAminoPrefix.length).toString('base64');
        }
        catch (e){
            console.log("Error converting from bech32 to pubkey: %o\n %o", pubkey, e);
            return false
        }
    },

    getVersion: function(){
        const version = Assets.getText('version');
        return version ? version : 'beta'
    }
})
