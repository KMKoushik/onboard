import Torus from '@toruslabs/torus-embed'
import { networkName } from '../../../utilities'
import { TorusOptions, WalletModule, Helpers } from '../../../interfaces'

//import torusIcon from '../wallet-icons/icon-torus.png'

const torusIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">  <image id="image0" width="500" height="500" x="0" y="0"
    href="data:image/png;base64,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
xoGyRqRxZmNvk6ipozm1uf3g2IOtLf4tBw6NPLT9sOXh6iOGR5YfpR4tOTpwrOhY33Hp8Z4TWSc6
W6e23jk54eS1U+NPtZ2OOn32t/DfTp5hnzl2NuDs4XN+5w6e9znfdMHrQuNFz4sHfvf8/UCbV1vj
Je9LzZd9L7e0j2k/eiXoyomroVd/u8a9duF6zPX2G0k3bt2cdLPjluDW09u5t1/+UfBH/535dwl3
y+7p3qu4b3q/9j+O/9nd4dVx5EHog4sPEx7e6eR3Pn8kf/Spq+Qx/XHFE4sndU/dnx7uDu++/Gzi
s67n0uf9PaV/6v1Z88Lhxf6/gv+62Duht+ul7OXAq6WvjV9vfzP6TWtfXN/9t3lv+9+VvTd+v+OD
z4czH1M+Pumf8Yn0qfKz4+eWL1Ff7g7kDQxIeTKeaiuAwYZmZgLwajsA9FQAGJfh/mGi+pynEkR9
NlUh8L+w+iyoEi8AGuBFuV3nHAdgD2x2wZB7PgDKrXpiMEA9PIaaRuSZHu5qLho88RDeDwy8NgOA
1ALAZ9nAQP+GgYHPW2GwtwE4Pl19vlQKEZ4NfgpWoutGSZPBd/JfZxSAO16j6r8AAAAgY0hSTQAA
eiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAcVQTFRF////jbn6c6n4ZKD4XZz3
e6757PP+0OP9udT8o8f7lb76hrX5fbD5eq75d6z5hLT5kLv6n8T7s9H7yd784+7+/P3/U5b3Y6D4
+/3/0uT9qcv7grL5Xp34WJn3ncP6xtz88/j+9fn/wNn8iLf5W5v3VJf3ea35rs776/P+/v//j7v6
e6/5v9j8+Pv/vNb8b6f4X534psn77/b+Z6L48vf+y9/9bKX4+vz/aqT4uNT8Wpv3lr/69/r/a6T4
2+n9Vpj3utX8w9r8mMD6/f7/rc37eK35m8L6tdL8yt/9msH65e/++Pr/3er9bab49vn/ZaH41eX9
nML6bqb44u3+VZf3stD7f7H53Or9q8z7jrr6Yp/4sdD7gLH5dav5VJb37fT+5vD+r877frD5ocb7
rMz7irj6Wpr3/v7/a6X45/D+0eP9ocX7t9P8qcr7ttP8wtr80OL9n8X7aaT4qsv79vr/9Pj+caj4
7/X+irf61+f9pcj7nsT67vX++fv/YZ/4z+L9xNv8kr36aKP43+z+kbz6mcH68fb+osb70+T9V5j3
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" />
</svg>`

function torus(options: TorusOptions): WalletModule {
  const {
    networkId,
    chainId,
    preferred,
    label,
    iconSrc,
    svg,
    buildEnv,
    buttonPosition,
    enableLogging,
    loginMethod,
    showTorusButton
  } = options

  return {
    name: label || 'Torus',
    svg: svg || torusIcon,
    iconSrc,
    wallet: async (helpers: Helpers) => {
      const instance = new Torus({
        buttonPosition: buttonPosition // default: bottom-left
      })

      await instance.init({
        buildEnv: buildEnv, // default: production
        enableLogging: enableLogging, // default: false
        network: {
          host: networkName(networkId), // default: mainnet
          chainId: chainId, // default: 1
          networkName: `${networkName(networkId)} Network` // default: Main Ethereum Network
        },
        showTorusButton: showTorusButton // default: true
      })

      const provider = instance.provider

      const { BigNumber } = helpers

      return {
        provider,
        instance,
        interface: {
          name: 'Torus',
          connect: async () => {
            let result = await instance.login({ verifier: loginMethod })
            return Promise.resolve({ message: result[0] })
          },
          disconnect: () => instance.logout(),
          address: {
            get: () => Promise.resolve(instance.web3.eth.accounts[0])
          },
          network: {
            get: () => Promise.resolve(Number(instance.web3.version.network))
          },
          balance: {
            get: () =>
              new Promise(async (resolve, reject) => {
                instance.web3.eth.getBalance(
                  instance.web3.eth.accounts[0],
                  (err: any, data: any) => {
                    if (err) {
                      reject(`Error while checking Balance: ${err}`)
                    } else {
                      resolve(BigNumber(data.c[0]).toString())
                    }
                  }
                )
              })
          }
        }
      }
    },
    desktop: true,
    mobile: true,
    preferred
  }
}

export default torus
