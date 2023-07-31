import { CountrieInterface } from "./countries.interface"
import { Region } from "./region.type"

export interface CacheStoreInterface{
    byCapital: LastSearchCountries
    byCountries: LastSearchCountries
    byRegion: LastSearchRegions
}

export interface LastSearchCountries {
    lastSearch: string,
    countries: CountrieInterface[]
}

export interface LastSearchRegions {
    lastSearch?: Region
    countries: CountrieInterface[]
}