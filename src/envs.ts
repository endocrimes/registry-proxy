type KVValue = {
    targetDomain: string
    authEndpoint: string
}
type Bindings = {
    REGISTRY_MAPS: Map<string, string>
}
type Variables = {
    targetRegistry: string
    targetAuthUrl: string
}
type Env = {
    Bindings: Bindings
    Variables: Variables
}

export { Env, KVValue };
