import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
    return yaml.load(
        readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
    ) as Record<string, any>;
};

export const cars = () => {
    return {
        cars:[
            // ['mitsubishi_galant','https://divar.ir/s/iran/car/mitsubishi/galant'],
            // ['mg','https://divar.ir/s/iran/car/mg'],
            // ['haima_s7','https://divar.ir/s/iran/car/haima/s7'],
            // ['lexus_nx','https://divar.ir/s/iran/car/lexus/nx-200t?brand_model=Lexus%20NX%20300%20H'],
            // ['kia_sorento','https://divar.ir/s/iran/car/kia/sorento'],
            // ['geely_emgrand-7','https://divar.ir/s/iran/car/geely/emgrand-7'],
            // ['lifan_620','https://divar.ir/s/iran/car/lifan/620'],
            // ['cs35','https://divar.ir/s/iran/car/changan/cs35'],
            // ['kia_sorento','https://divar.ir/s/iran/car/kia/sorento'],
            // ['soren','https://divar.ir/s/iran/car/samand/soren/basic?brand_model=Samand%20Soren%20Plus'],
            ['jeep','https://divar.ir/s/iran/car/jeep'],
            // ['pazhan','https://divar.ir/s/iran/car/pazhan'],
            // ['elentra','https://divar.ir/s/iran/car/hyundai/elantra'],
            // ['porsche','https://divar.ir/s/iran/car/porsche'],
            // ['accent','https://divar.ir/s/iran/car/hyundai/accent'],
            // ['dena','https://divar.ir/s/iran/car/dena'],
            // ['dongfeng','https://divar.ir/s/iran/car/dongfeng'],
            // ['runna','https://divar.ir/s/iran/car/runna'],
            // ['brilliance_330_320','https://divar.ir/s/iran/car/brilliance/h320?brand_model=Brilliance%20H330'],
            // ['nissan_maxima','https://divar.ir/s/iran/car/nissan/maxima-ir'],
            // ['azera_grandeur','https://divar.ir/s/iran/car/hyundai/azera-grandeur'],
            // ['mvm110','https://divar.ir/s/iran/car/mvm/110'],
            // ['lifan_x60','https://divar.ir/s/iran/car/lifan/x60'],
            // ['peykan_vanet','https://divar.ir/s/iran/car/paykan/pickup'],
            // ['patrol','https://divar.ir/s/iran/car/nissan/patrol-2-door?brand_model=Nissan%20Patrol%204%20door'],
            // ['kia_sportage','https://divar.ir/s/iran/car/kia/sportage/2400cc?brand_model=Kia%20Sportage%202700cc'],
            // ['jack_j5','https://divar.ir/s/iran/car/jac/j5'],
            // ['mvm_315','https://divar.ir/s/iran/car/mvm/315-hatchback?brand_model=MVM%20315%20hatchback%20basic%2CMVM%20315%20Hatchback%20Plus'],
            ['kia_optima','https://divar.ir/s/iran/car/kia/optima'],
            // ['mazda_3','https://divar.ir/s/iran/car/mazda/3-ir/3?brand_model=Mazda%203-ir%2CMazda%203-ir%202'],
            ['hyundai_sonata','https://divar.ir/s/iran/car/hyundai/sonata-nf?brand_model=Hyundai%20Sonata-LF-hybrid%2CHyundai%20Sonata-LF%2CHyundai%20Sonata-YF%2CHyundai%20Sonata-LF-hybrid%20GL%2CHyundai%20Sonata-LF-hybrid%20GLS%2CHyundai%20Sonata-NF%20automatic-2400cc%2CHyundai%20Sonata-LF-hybrid%20GLS-Plus'],
            ['kia_rio','https://divar.ir/s/iran/car/kia/rio'],
            ['hyundai_ix35','https://divar.ir/s/iran/car/hyundai/tucson-ix35/2000cc?brand_model=Hyundai%20Tucson-ix35%202400cc%2CHyundai%20Tucson-ix35%202700cc'],
            ['benz','https://divar.ir/s/iran/car/mercedes-benz'],
            ['nissan_zamyad','https://divar.ir/s/iran/car/zamyad/z-24'],
            ['deawoo_cielo','https://divar.ir/s/iran/car/daewoo/cielo'],
            ['kia_cerato','https://divar.ir/s/iran/car/kia/cerato'],

        ]
    }
}

