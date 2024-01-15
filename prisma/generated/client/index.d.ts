
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Influencers
 * 
 */
export type Influencers = $Result.DefaultSelection<Prisma.$InfluencersPayload>
/**
 * Model InfluencerDetail
 * 
 */
export type InfluencerDetail = $Result.DefaultSelection<Prisma.$InfluencerDetailPayload>
/**
 * Model Brands
 * 
 */
export type Brands = $Result.DefaultSelection<Prisma.$BrandsPayload>
/**
 * Model BrandsDetails
 * 
 */
export type BrandsDetails = $Result.DefaultSelection<Prisma.$BrandsDetailsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Influencers
 * const influencers = await prisma.influencers.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Influencers
   * const influencers = await prisma.influencers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.influencers`: Exposes CRUD operations for the **Influencers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Influencers
    * const influencers = await prisma.influencers.findMany()
    * ```
    */
  get influencers(): Prisma.InfluencersDelegate<ExtArgs>;

  /**
   * `prisma.influencerDetail`: Exposes CRUD operations for the **InfluencerDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfluencerDetails
    * const influencerDetails = await prisma.influencerDetail.findMany()
    * ```
    */
  get influencerDetail(): Prisma.InfluencerDetailDelegate<ExtArgs>;

  /**
   * `prisma.brands`: Exposes CRUD operations for the **Brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.BrandsDelegate<ExtArgs>;

  /**
   * `prisma.brandsDetails`: Exposes CRUD operations for the **BrandsDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BrandsDetails
    * const brandsDetails = await prisma.brandsDetails.findMany()
    * ```
    */
  get brandsDetails(): Prisma.BrandsDetailsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.0
   * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Influencers: 'Influencers',
    InfluencerDetail: 'InfluencerDetail',
    Brands: 'Brands',
    BrandsDetails: 'BrandsDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'influencers' | 'influencerDetail' | 'brands' | 'brandsDetails'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Influencers: {
        payload: Prisma.$InfluencersPayload<ExtArgs>
        fields: Prisma.InfluencersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfluencersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfluencersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload>
          }
          findFirst: {
            args: Prisma.InfluencersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfluencersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload>
          }
          findMany: {
            args: Prisma.InfluencersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload>[]
          }
          create: {
            args: Prisma.InfluencersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload>
          }
          createMany: {
            args: Prisma.InfluencersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InfluencersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload>
          }
          update: {
            args: Prisma.InfluencersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload>
          }
          deleteMany: {
            args: Prisma.InfluencersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InfluencersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InfluencersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencersPayload>
          }
          aggregate: {
            args: Prisma.InfluencersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInfluencers>
          }
          groupBy: {
            args: Prisma.InfluencersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InfluencersGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfluencersCountArgs<ExtArgs>,
            result: $Utils.Optional<InfluencersCountAggregateOutputType> | number
          }
        }
      }
      InfluencerDetail: {
        payload: Prisma.$InfluencerDetailPayload<ExtArgs>
        fields: Prisma.InfluencerDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfluencerDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfluencerDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload>
          }
          findFirst: {
            args: Prisma.InfluencerDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfluencerDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload>
          }
          findMany: {
            args: Prisma.InfluencerDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload>[]
          }
          create: {
            args: Prisma.InfluencerDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload>
          }
          createMany: {
            args: Prisma.InfluencerDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InfluencerDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload>
          }
          update: {
            args: Prisma.InfluencerDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload>
          }
          deleteMany: {
            args: Prisma.InfluencerDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InfluencerDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InfluencerDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InfluencerDetailPayload>
          }
          aggregate: {
            args: Prisma.InfluencerDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInfluencerDetail>
          }
          groupBy: {
            args: Prisma.InfluencerDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InfluencerDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfluencerDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<InfluencerDetailCountAggregateOutputType> | number
          }
        }
      }
      Brands: {
        payload: Prisma.$BrandsPayload<ExtArgs>
        fields: Prisma.BrandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findFirst: {
            args: Prisma.BrandsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findMany: {
            args: Prisma.BrandsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          create: {
            args: Prisma.BrandsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          createMany: {
            args: Prisma.BrandsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          update: {
            args: Prisma.BrandsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          deleteMany: {
            args: Prisma.BrandsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.BrandsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandsCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
      BrandsDetails: {
        payload: Prisma.$BrandsDetailsPayload<ExtArgs>
        fields: Prisma.BrandsDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandsDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandsDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload>
          }
          findFirst: {
            args: Prisma.BrandsDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandsDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload>
          }
          findMany: {
            args: Prisma.BrandsDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload>[]
          }
          create: {
            args: Prisma.BrandsDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload>
          }
          createMany: {
            args: Prisma.BrandsDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BrandsDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload>
          }
          update: {
            args: Prisma.BrandsDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload>
          }
          deleteMany: {
            args: Prisma.BrandsDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BrandsDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BrandsDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BrandsDetailsPayload>
          }
          aggregate: {
            args: Prisma.BrandsDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBrandsDetails>
          }
          groupBy: {
            args: Prisma.BrandsDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BrandsDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandsDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<BrandsDetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Influencers
   */

  export type AggregateInfluencers = {
    _count: InfluencersCountAggregateOutputType | null
    _avg: InfluencersAvgAggregateOutputType | null
    _sum: InfluencersSumAggregateOutputType | null
    _min: InfluencersMinAggregateOutputType | null
    _max: InfluencersMaxAggregateOutputType | null
  }

  export type InfluencersAvgAggregateOutputType = {
    id: number | null
  }

  export type InfluencersSumAggregateOutputType = {
    id: number | null
  }

  export type InfluencersMinAggregateOutputType = {
    id: number | null
    email: string | null
    insta_username: string | null
    name: string | null
  }

  export type InfluencersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    insta_username: string | null
    name: string | null
  }

  export type InfluencersCountAggregateOutputType = {
    id: number
    email: number
    insta_username: number
    name: number
    _all: number
  }


  export type InfluencersAvgAggregateInputType = {
    id?: true
  }

  export type InfluencersSumAggregateInputType = {
    id?: true
  }

  export type InfluencersMinAggregateInputType = {
    id?: true
    email?: true
    insta_username?: true
    name?: true
  }

  export type InfluencersMaxAggregateInputType = {
    id?: true
    email?: true
    insta_username?: true
    name?: true
  }

  export type InfluencersCountAggregateInputType = {
    id?: true
    email?: true
    insta_username?: true
    name?: true
    _all?: true
  }

  export type InfluencersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Influencers to aggregate.
     */
    where?: InfluencersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Influencers to fetch.
     */
    orderBy?: InfluencersOrderByWithRelationInput | InfluencersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfluencersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Influencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Influencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Influencers
    **/
    _count?: true | InfluencersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfluencersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfluencersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfluencersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfluencersMaxAggregateInputType
  }

  export type GetInfluencersAggregateType<T extends InfluencersAggregateArgs> = {
        [P in keyof T & keyof AggregateInfluencers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfluencers[P]>
      : GetScalarType<T[P], AggregateInfluencers[P]>
  }




  export type InfluencersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfluencersWhereInput
    orderBy?: InfluencersOrderByWithAggregationInput | InfluencersOrderByWithAggregationInput[]
    by: InfluencersScalarFieldEnum[] | InfluencersScalarFieldEnum
    having?: InfluencersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfluencersCountAggregateInputType | true
    _avg?: InfluencersAvgAggregateInputType
    _sum?: InfluencersSumAggregateInputType
    _min?: InfluencersMinAggregateInputType
    _max?: InfluencersMaxAggregateInputType
  }

  export type InfluencersGroupByOutputType = {
    id: number
    email: string
    insta_username: string
    name: string | null
    _count: InfluencersCountAggregateOutputType | null
    _avg: InfluencersAvgAggregateOutputType | null
    _sum: InfluencersSumAggregateOutputType | null
    _min: InfluencersMinAggregateOutputType | null
    _max: InfluencersMaxAggregateOutputType | null
  }

  type GetInfluencersGroupByPayload<T extends InfluencersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfluencersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfluencersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfluencersGroupByOutputType[P]>
            : GetScalarType<T[P], InfluencersGroupByOutputType[P]>
        }
      >
    >


  export type InfluencersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    insta_username?: boolean
    name?: boolean
    Details?: boolean | Influencers$DetailsArgs<ExtArgs>
  }, ExtArgs["result"]["influencers"]>

  export type InfluencersSelectScalar = {
    id?: boolean
    email?: boolean
    insta_username?: boolean
    name?: boolean
  }

  export type InfluencersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Details?: boolean | Influencers$DetailsArgs<ExtArgs>
  }


  export type $InfluencersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Influencers"
    objects: {
      Details: Prisma.$InfluencerDetailPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      insta_username: string
      name: string | null
    }, ExtArgs["result"]["influencers"]>
    composites: {}
  }


  type InfluencersGetPayload<S extends boolean | null | undefined | InfluencersDefaultArgs> = $Result.GetResult<Prisma.$InfluencersPayload, S>

  type InfluencersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InfluencersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InfluencersCountAggregateInputType | true
    }

  export interface InfluencersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Influencers'], meta: { name: 'Influencers' } }
    /**
     * Find zero or one Influencers that matches the filter.
     * @param {InfluencersFindUniqueArgs} args - Arguments to find a Influencers
     * @example
     * // Get one Influencers
     * const influencers = await prisma.influencers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InfluencersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencersFindUniqueArgs<ExtArgs>>
    ): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Influencers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InfluencersFindUniqueOrThrowArgs} args - Arguments to find a Influencers
     * @example
     * // Get one Influencers
     * const influencers = await prisma.influencers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InfluencersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Influencers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencersFindFirstArgs} args - Arguments to find a Influencers
     * @example
     * // Get one Influencers
     * const influencers = await prisma.influencers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InfluencersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencersFindFirstArgs<ExtArgs>>
    ): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Influencers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencersFindFirstOrThrowArgs} args - Arguments to find a Influencers
     * @example
     * // Get one Influencers
     * const influencers = await prisma.influencers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InfluencersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Influencers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Influencers
     * const influencers = await prisma.influencers.findMany()
     * 
     * // Get first 10 Influencers
     * const influencers = await prisma.influencers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const influencersWithIdOnly = await prisma.influencers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InfluencersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Influencers.
     * @param {InfluencersCreateArgs} args - Arguments to create a Influencers.
     * @example
     * // Create one Influencers
     * const Influencers = await prisma.influencers.create({
     *   data: {
     *     // ... data to create a Influencers
     *   }
     * })
     * 
    **/
    create<T extends InfluencersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencersCreateArgs<ExtArgs>>
    ): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Influencers.
     *     @param {InfluencersCreateManyArgs} args - Arguments to create many Influencers.
     *     @example
     *     // Create many Influencers
     *     const influencers = await prisma.influencers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InfluencersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Influencers.
     * @param {InfluencersDeleteArgs} args - Arguments to delete one Influencers.
     * @example
     * // Delete one Influencers
     * const Influencers = await prisma.influencers.delete({
     *   where: {
     *     // ... filter to delete one Influencers
     *   }
     * })
     * 
    **/
    delete<T extends InfluencersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencersDeleteArgs<ExtArgs>>
    ): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Influencers.
     * @param {InfluencersUpdateArgs} args - Arguments to update one Influencers.
     * @example
     * // Update one Influencers
     * const influencers = await prisma.influencers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InfluencersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencersUpdateArgs<ExtArgs>>
    ): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Influencers.
     * @param {InfluencersDeleteManyArgs} args - Arguments to filter Influencers to delete.
     * @example
     * // Delete a few Influencers
     * const { count } = await prisma.influencers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InfluencersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Influencers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Influencers
     * const influencers = await prisma.influencers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InfluencersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Influencers.
     * @param {InfluencersUpsertArgs} args - Arguments to update or create a Influencers.
     * @example
     * // Update or create a Influencers
     * const influencers = await prisma.influencers.upsert({
     *   create: {
     *     // ... data to create a Influencers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Influencers we want to update
     *   }
     * })
    **/
    upsert<T extends InfluencersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencersUpsertArgs<ExtArgs>>
    ): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Influencers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencersCountArgs} args - Arguments to filter Influencers to count.
     * @example
     * // Count the number of Influencers
     * const count = await prisma.influencers.count({
     *   where: {
     *     // ... the filter for the Influencers we want to count
     *   }
     * })
    **/
    count<T extends InfluencersCountArgs>(
      args?: Subset<T, InfluencersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfluencersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Influencers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfluencersAggregateArgs>(args: Subset<T, InfluencersAggregateArgs>): Prisma.PrismaPromise<GetInfluencersAggregateType<T>>

    /**
     * Group by Influencers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfluencersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfluencersGroupByArgs['orderBy'] }
        : { orderBy?: InfluencersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfluencersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfluencersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Influencers model
   */
  readonly fields: InfluencersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Influencers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfluencersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Details<T extends Influencers$DetailsArgs<ExtArgs> = {}>(args?: Subset<T, Influencers$DetailsArgs<ExtArgs>>): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Influencers model
   */ 
  interface InfluencersFieldRefs {
    readonly id: FieldRef<"Influencers", 'Int'>
    readonly email: FieldRef<"Influencers", 'String'>
    readonly insta_username: FieldRef<"Influencers", 'String'>
    readonly name: FieldRef<"Influencers", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Influencers findUnique
   */
  export type InfluencersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * Filter, which Influencers to fetch.
     */
    where: InfluencersWhereUniqueInput
  }


  /**
   * Influencers findUniqueOrThrow
   */
  export type InfluencersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * Filter, which Influencers to fetch.
     */
    where: InfluencersWhereUniqueInput
  }


  /**
   * Influencers findFirst
   */
  export type InfluencersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * Filter, which Influencers to fetch.
     */
    where?: InfluencersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Influencers to fetch.
     */
    orderBy?: InfluencersOrderByWithRelationInput | InfluencersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Influencers.
     */
    cursor?: InfluencersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Influencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Influencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Influencers.
     */
    distinct?: InfluencersScalarFieldEnum | InfluencersScalarFieldEnum[]
  }


  /**
   * Influencers findFirstOrThrow
   */
  export type InfluencersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * Filter, which Influencers to fetch.
     */
    where?: InfluencersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Influencers to fetch.
     */
    orderBy?: InfluencersOrderByWithRelationInput | InfluencersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Influencers.
     */
    cursor?: InfluencersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Influencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Influencers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Influencers.
     */
    distinct?: InfluencersScalarFieldEnum | InfluencersScalarFieldEnum[]
  }


  /**
   * Influencers findMany
   */
  export type InfluencersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * Filter, which Influencers to fetch.
     */
    where?: InfluencersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Influencers to fetch.
     */
    orderBy?: InfluencersOrderByWithRelationInput | InfluencersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Influencers.
     */
    cursor?: InfluencersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Influencers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Influencers.
     */
    skip?: number
    distinct?: InfluencersScalarFieldEnum | InfluencersScalarFieldEnum[]
  }


  /**
   * Influencers create
   */
  export type InfluencersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * The data needed to create a Influencers.
     */
    data: XOR<InfluencersCreateInput, InfluencersUncheckedCreateInput>
  }


  /**
   * Influencers createMany
   */
  export type InfluencersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Influencers.
     */
    data: InfluencersCreateManyInput | InfluencersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Influencers update
   */
  export type InfluencersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * The data needed to update a Influencers.
     */
    data: XOR<InfluencersUpdateInput, InfluencersUncheckedUpdateInput>
    /**
     * Choose, which Influencers to update.
     */
    where: InfluencersWhereUniqueInput
  }


  /**
   * Influencers updateMany
   */
  export type InfluencersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Influencers.
     */
    data: XOR<InfluencersUpdateManyMutationInput, InfluencersUncheckedUpdateManyInput>
    /**
     * Filter which Influencers to update
     */
    where?: InfluencersWhereInput
  }


  /**
   * Influencers upsert
   */
  export type InfluencersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * The filter to search for the Influencers to update in case it exists.
     */
    where: InfluencersWhereUniqueInput
    /**
     * In case the Influencers found by the `where` argument doesn't exist, create a new Influencers with this data.
     */
    create: XOR<InfluencersCreateInput, InfluencersUncheckedCreateInput>
    /**
     * In case the Influencers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfluencersUpdateInput, InfluencersUncheckedUpdateInput>
  }


  /**
   * Influencers delete
   */
  export type InfluencersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
    /**
     * Filter which Influencers to delete.
     */
    where: InfluencersWhereUniqueInput
  }


  /**
   * Influencers deleteMany
   */
  export type InfluencersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Influencers to delete
     */
    where?: InfluencersWhereInput
  }


  /**
   * Influencers.Details
   */
  export type Influencers$DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    where?: InfluencerDetailWhereInput
  }


  /**
   * Influencers without action
   */
  export type InfluencersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Influencers
     */
    select?: InfluencersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencersInclude<ExtArgs> | null
  }



  /**
   * Model InfluencerDetail
   */

  export type AggregateInfluencerDetail = {
    _count: InfluencerDetailCountAggregateOutputType | null
    _avg: InfluencerDetailAvgAggregateOutputType | null
    _sum: InfluencerDetailSumAggregateOutputType | null
    _min: InfluencerDetailMinAggregateOutputType | null
    _max: InfluencerDetailMaxAggregateOutputType | null
  }

  export type InfluencerDetailAvgAggregateOutputType = {
    id: number | null
    audienceAge: number | null
    authorId: number | null
  }

  export type InfluencerDetailSumAggregateOutputType = {
    id: number | null
    audienceAge: number | null
    authorId: number | null
  }

  export type InfluencerDetailMinAggregateOutputType = {
    id: number | null
    audienceAge: number | null
    posts: string | null
    authorId: number | null
  }

  export type InfluencerDetailMaxAggregateOutputType = {
    id: number | null
    audienceAge: number | null
    posts: string | null
    authorId: number | null
  }

  export type InfluencerDetailCountAggregateOutputType = {
    id: number
    contentType: number
    influencerType: number
    audienceAge: number
    posts: number
    platformLink: number
    authorId: number
    _all: number
  }


  export type InfluencerDetailAvgAggregateInputType = {
    id?: true
    audienceAge?: true
    authorId?: true
  }

  export type InfluencerDetailSumAggregateInputType = {
    id?: true
    audienceAge?: true
    authorId?: true
  }

  export type InfluencerDetailMinAggregateInputType = {
    id?: true
    audienceAge?: true
    posts?: true
    authorId?: true
  }

  export type InfluencerDetailMaxAggregateInputType = {
    id?: true
    audienceAge?: true
    posts?: true
    authorId?: true
  }

  export type InfluencerDetailCountAggregateInputType = {
    id?: true
    contentType?: true
    influencerType?: true
    audienceAge?: true
    posts?: true
    platformLink?: true
    authorId?: true
    _all?: true
  }

  export type InfluencerDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfluencerDetail to aggregate.
     */
    where?: InfluencerDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfluencerDetails to fetch.
     */
    orderBy?: InfluencerDetailOrderByWithRelationInput | InfluencerDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfluencerDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfluencerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfluencerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InfluencerDetails
    **/
    _count?: true | InfluencerDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfluencerDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfluencerDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfluencerDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfluencerDetailMaxAggregateInputType
  }

  export type GetInfluencerDetailAggregateType<T extends InfluencerDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateInfluencerDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfluencerDetail[P]>
      : GetScalarType<T[P], AggregateInfluencerDetail[P]>
  }




  export type InfluencerDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfluencerDetailWhereInput
    orderBy?: InfluencerDetailOrderByWithAggregationInput | InfluencerDetailOrderByWithAggregationInput[]
    by: InfluencerDetailScalarFieldEnum[] | InfluencerDetailScalarFieldEnum
    having?: InfluencerDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfluencerDetailCountAggregateInputType | true
    _avg?: InfluencerDetailAvgAggregateInputType
    _sum?: InfluencerDetailSumAggregateInputType
    _min?: InfluencerDetailMinAggregateInputType
    _max?: InfluencerDetailMaxAggregateInputType
  }

  export type InfluencerDetailGroupByOutputType = {
    id: number
    contentType: string[]
    influencerType: string[]
    audienceAge: number
    posts: string
    platformLink: string[]
    authorId: number
    _count: InfluencerDetailCountAggregateOutputType | null
    _avg: InfluencerDetailAvgAggregateOutputType | null
    _sum: InfluencerDetailSumAggregateOutputType | null
    _min: InfluencerDetailMinAggregateOutputType | null
    _max: InfluencerDetailMaxAggregateOutputType | null
  }

  type GetInfluencerDetailGroupByPayload<T extends InfluencerDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfluencerDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfluencerDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfluencerDetailGroupByOutputType[P]>
            : GetScalarType<T[P], InfluencerDetailGroupByOutputType[P]>
        }
      >
    >


  export type InfluencerDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentType?: boolean
    influencerType?: boolean
    audienceAge?: boolean
    posts?: boolean
    platformLink?: boolean
    authorId?: boolean
    author?: boolean | InfluencersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["influencerDetail"]>

  export type InfluencerDetailSelectScalar = {
    id?: boolean
    contentType?: boolean
    influencerType?: boolean
    audienceAge?: boolean
    posts?: boolean
    platformLink?: boolean
    authorId?: boolean
  }

  export type InfluencerDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | InfluencersDefaultArgs<ExtArgs>
  }


  export type $InfluencerDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InfluencerDetail"
    objects: {
      author: Prisma.$InfluencersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contentType: string[]
      influencerType: string[]
      audienceAge: number
      posts: string
      platformLink: string[]
      authorId: number
    }, ExtArgs["result"]["influencerDetail"]>
    composites: {}
  }


  type InfluencerDetailGetPayload<S extends boolean | null | undefined | InfluencerDetailDefaultArgs> = $Result.GetResult<Prisma.$InfluencerDetailPayload, S>

  type InfluencerDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InfluencerDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InfluencerDetailCountAggregateInputType | true
    }

  export interface InfluencerDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InfluencerDetail'], meta: { name: 'InfluencerDetail' } }
    /**
     * Find zero or one InfluencerDetail that matches the filter.
     * @param {InfluencerDetailFindUniqueArgs} args - Arguments to find a InfluencerDetail
     * @example
     * // Get one InfluencerDetail
     * const influencerDetail = await prisma.influencerDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InfluencerDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencerDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InfluencerDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InfluencerDetailFindUniqueOrThrowArgs} args - Arguments to find a InfluencerDetail
     * @example
     * // Get one InfluencerDetail
     * const influencerDetail = await prisma.influencerDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InfluencerDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencerDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InfluencerDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerDetailFindFirstArgs} args - Arguments to find a InfluencerDetail
     * @example
     * // Get one InfluencerDetail
     * const influencerDetail = await prisma.influencerDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InfluencerDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencerDetailFindFirstArgs<ExtArgs>>
    ): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InfluencerDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerDetailFindFirstOrThrowArgs} args - Arguments to find a InfluencerDetail
     * @example
     * // Get one InfluencerDetail
     * const influencerDetail = await prisma.influencerDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InfluencerDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencerDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InfluencerDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfluencerDetails
     * const influencerDetails = await prisma.influencerDetail.findMany()
     * 
     * // Get first 10 InfluencerDetails
     * const influencerDetails = await prisma.influencerDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const influencerDetailWithIdOnly = await prisma.influencerDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InfluencerDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencerDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InfluencerDetail.
     * @param {InfluencerDetailCreateArgs} args - Arguments to create a InfluencerDetail.
     * @example
     * // Create one InfluencerDetail
     * const InfluencerDetail = await prisma.influencerDetail.create({
     *   data: {
     *     // ... data to create a InfluencerDetail
     *   }
     * })
     * 
    **/
    create<T extends InfluencerDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencerDetailCreateArgs<ExtArgs>>
    ): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InfluencerDetails.
     *     @param {InfluencerDetailCreateManyArgs} args - Arguments to create many InfluencerDetails.
     *     @example
     *     // Create many InfluencerDetails
     *     const influencerDetail = await prisma.influencerDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InfluencerDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencerDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InfluencerDetail.
     * @param {InfluencerDetailDeleteArgs} args - Arguments to delete one InfluencerDetail.
     * @example
     * // Delete one InfluencerDetail
     * const InfluencerDetail = await prisma.influencerDetail.delete({
     *   where: {
     *     // ... filter to delete one InfluencerDetail
     *   }
     * })
     * 
    **/
    delete<T extends InfluencerDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencerDetailDeleteArgs<ExtArgs>>
    ): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InfluencerDetail.
     * @param {InfluencerDetailUpdateArgs} args - Arguments to update one InfluencerDetail.
     * @example
     * // Update one InfluencerDetail
     * const influencerDetail = await prisma.influencerDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InfluencerDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencerDetailUpdateArgs<ExtArgs>>
    ): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InfluencerDetails.
     * @param {InfluencerDetailDeleteManyArgs} args - Arguments to filter InfluencerDetails to delete.
     * @example
     * // Delete a few InfluencerDetails
     * const { count } = await prisma.influencerDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InfluencerDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InfluencerDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfluencerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfluencerDetails
     * const influencerDetail = await prisma.influencerDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InfluencerDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencerDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InfluencerDetail.
     * @param {InfluencerDetailUpsertArgs} args - Arguments to update or create a InfluencerDetail.
     * @example
     * // Update or create a InfluencerDetail
     * const influencerDetail = await prisma.influencerDetail.upsert({
     *   create: {
     *     // ... data to create a InfluencerDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfluencerDetail we want to update
     *   }
     * })
    **/
    upsert<T extends InfluencerDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InfluencerDetailUpsertArgs<ExtArgs>>
    ): Prisma__InfluencerDetailClient<$Result.GetResult<Prisma.$InfluencerDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InfluencerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerDetailCountArgs} args - Arguments to filter InfluencerDetails to count.
     * @example
     * // Count the number of InfluencerDetails
     * const count = await prisma.influencerDetail.count({
     *   where: {
     *     // ... the filter for the InfluencerDetails we want to count
     *   }
     * })
    **/
    count<T extends InfluencerDetailCountArgs>(
      args?: Subset<T, InfluencerDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfluencerDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfluencerDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfluencerDetailAggregateArgs>(args: Subset<T, InfluencerDetailAggregateArgs>): Prisma.PrismaPromise<GetInfluencerDetailAggregateType<T>>

    /**
     * Group by InfluencerDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfluencerDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfluencerDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfluencerDetailGroupByArgs['orderBy'] }
        : { orderBy?: InfluencerDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfluencerDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfluencerDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InfluencerDetail model
   */
  readonly fields: InfluencerDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InfluencerDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfluencerDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends InfluencersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InfluencersDefaultArgs<ExtArgs>>): Prisma__InfluencersClient<$Result.GetResult<Prisma.$InfluencersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InfluencerDetail model
   */ 
  interface InfluencerDetailFieldRefs {
    readonly id: FieldRef<"InfluencerDetail", 'Int'>
    readonly contentType: FieldRef<"InfluencerDetail", 'String[]'>
    readonly influencerType: FieldRef<"InfluencerDetail", 'String[]'>
    readonly audienceAge: FieldRef<"InfluencerDetail", 'Int'>
    readonly posts: FieldRef<"InfluencerDetail", 'String'>
    readonly platformLink: FieldRef<"InfluencerDetail", 'String[]'>
    readonly authorId: FieldRef<"InfluencerDetail", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * InfluencerDetail findUnique
   */
  export type InfluencerDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerDetail to fetch.
     */
    where: InfluencerDetailWhereUniqueInput
  }


  /**
   * InfluencerDetail findUniqueOrThrow
   */
  export type InfluencerDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerDetail to fetch.
     */
    where: InfluencerDetailWhereUniqueInput
  }


  /**
   * InfluencerDetail findFirst
   */
  export type InfluencerDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerDetail to fetch.
     */
    where?: InfluencerDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfluencerDetails to fetch.
     */
    orderBy?: InfluencerDetailOrderByWithRelationInput | InfluencerDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfluencerDetails.
     */
    cursor?: InfluencerDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfluencerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfluencerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfluencerDetails.
     */
    distinct?: InfluencerDetailScalarFieldEnum | InfluencerDetailScalarFieldEnum[]
  }


  /**
   * InfluencerDetail findFirstOrThrow
   */
  export type InfluencerDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerDetail to fetch.
     */
    where?: InfluencerDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfluencerDetails to fetch.
     */
    orderBy?: InfluencerDetailOrderByWithRelationInput | InfluencerDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfluencerDetails.
     */
    cursor?: InfluencerDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfluencerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfluencerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfluencerDetails.
     */
    distinct?: InfluencerDetailScalarFieldEnum | InfluencerDetailScalarFieldEnum[]
  }


  /**
   * InfluencerDetail findMany
   */
  export type InfluencerDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * Filter, which InfluencerDetails to fetch.
     */
    where?: InfluencerDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfluencerDetails to fetch.
     */
    orderBy?: InfluencerDetailOrderByWithRelationInput | InfluencerDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InfluencerDetails.
     */
    cursor?: InfluencerDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfluencerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfluencerDetails.
     */
    skip?: number
    distinct?: InfluencerDetailScalarFieldEnum | InfluencerDetailScalarFieldEnum[]
  }


  /**
   * InfluencerDetail create
   */
  export type InfluencerDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a InfluencerDetail.
     */
    data: XOR<InfluencerDetailCreateInput, InfluencerDetailUncheckedCreateInput>
  }


  /**
   * InfluencerDetail createMany
   */
  export type InfluencerDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InfluencerDetails.
     */
    data: InfluencerDetailCreateManyInput | InfluencerDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InfluencerDetail update
   */
  export type InfluencerDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a InfluencerDetail.
     */
    data: XOR<InfluencerDetailUpdateInput, InfluencerDetailUncheckedUpdateInput>
    /**
     * Choose, which InfluencerDetail to update.
     */
    where: InfluencerDetailWhereUniqueInput
  }


  /**
   * InfluencerDetail updateMany
   */
  export type InfluencerDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InfluencerDetails.
     */
    data: XOR<InfluencerDetailUpdateManyMutationInput, InfluencerDetailUncheckedUpdateManyInput>
    /**
     * Filter which InfluencerDetails to update
     */
    where?: InfluencerDetailWhereInput
  }


  /**
   * InfluencerDetail upsert
   */
  export type InfluencerDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the InfluencerDetail to update in case it exists.
     */
    where: InfluencerDetailWhereUniqueInput
    /**
     * In case the InfluencerDetail found by the `where` argument doesn't exist, create a new InfluencerDetail with this data.
     */
    create: XOR<InfluencerDetailCreateInput, InfluencerDetailUncheckedCreateInput>
    /**
     * In case the InfluencerDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfluencerDetailUpdateInput, InfluencerDetailUncheckedUpdateInput>
  }


  /**
   * InfluencerDetail delete
   */
  export type InfluencerDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
    /**
     * Filter which InfluencerDetail to delete.
     */
    where: InfluencerDetailWhereUniqueInput
  }


  /**
   * InfluencerDetail deleteMany
   */
  export type InfluencerDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfluencerDetails to delete
     */
    where?: InfluencerDetailWhereInput
  }


  /**
   * InfluencerDetail without action
   */
  export type InfluencerDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfluencerDetail
     */
    select?: InfluencerDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InfluencerDetailInclude<ExtArgs> | null
  }



  /**
   * Model Brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _avg: BrandsAvgAggregateOutputType | null
    _sum: BrandsSumAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandsSumAggregateOutputType = {
    id: number | null
  }

  export type BrandsMinAggregateOutputType = {
    id: number | null
    email: string | null
    insta_username: string | null
    companyName: string | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    insta_username: string | null
    companyName: string | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    email: number
    insta_username: number
    companyName: number
    _all: number
  }


  export type BrandsAvgAggregateInputType = {
    id?: true
  }

  export type BrandsSumAggregateInputType = {
    id?: true
  }

  export type BrandsMinAggregateInputType = {
    id?: true
    email?: true
    insta_username?: true
    companyName?: true
  }

  export type BrandsMaxAggregateInputType = {
    id?: true
    email?: true
    insta_username?: true
    companyName?: true
  }

  export type BrandsCountAggregateInputType = {
    id?: true
    email?: true
    insta_username?: true
    companyName?: true
    _all?: true
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to aggregate.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type BrandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandsWhereInput
    orderBy?: BrandsOrderByWithAggregationInput | BrandsOrderByWithAggregationInput[]
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: BrandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _avg?: BrandsAvgAggregateInputType
    _sum?: BrandsSumAggregateInputType
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    id: number
    email: string
    insta_username: string
    companyName: string
    _count: BrandsCountAggregateOutputType | null
    _avg: BrandsAvgAggregateOutputType | null
    _sum: BrandsSumAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends BrandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type BrandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    insta_username?: boolean
    companyName?: boolean
    Details?: boolean | Brands$DetailsArgs<ExtArgs>
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectScalar = {
    id?: boolean
    email?: boolean
    insta_username?: boolean
    companyName?: boolean
  }

  export type BrandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Details?: boolean | Brands$DetailsArgs<ExtArgs>
  }


  export type $BrandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brands"
    objects: {
      Details: Prisma.$BrandsDetailsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      insta_username: string
      companyName: string
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }


  type BrandsGetPayload<S extends boolean | null | undefined | BrandsDefaultArgs> = $Result.GetResult<Prisma.$BrandsPayload, S>

  type BrandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface BrandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brands'], meta: { name: 'Brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {BrandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Brands that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsFindFirstArgs<ExtArgs>>
    ): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Brands.
     * @param {BrandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
    **/
    create<T extends BrandsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsCreateArgs<ExtArgs>>
    ): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Brands.
     *     @param {BrandsCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brands = await prisma.brands.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brands.
     * @param {BrandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
    **/
    delete<T extends BrandsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsDeleteArgs<ExtArgs>>
    ): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Brands.
     * @param {BrandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsUpdateArgs<ExtArgs>>
    ): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Brands.
     * @param {BrandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brands.
     * @param {BrandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
    **/
    upsert<T extends BrandsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsUpsertArgs<ExtArgs>>
    ): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandsCountArgs>(
      args?: Subset<T, BrandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandsGroupByArgs['orderBy'] }
        : { orderBy?: BrandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brands model
   */
  readonly fields: BrandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Details<T extends Brands$DetailsArgs<ExtArgs> = {}>(args?: Subset<T, Brands$DetailsArgs<ExtArgs>>): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Brands model
   */ 
  interface BrandsFieldRefs {
    readonly id: FieldRef<"Brands", 'Int'>
    readonly email: FieldRef<"Brands", 'String'>
    readonly insta_username: FieldRef<"Brands", 'String'>
    readonly companyName: FieldRef<"Brands", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Brands findUnique
   */
  export type BrandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }


  /**
   * Brands findUniqueOrThrow
   */
  export type BrandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }


  /**
   * Brands findFirst
   */
  export type BrandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }


  /**
   * Brands findFirstOrThrow
   */
  export type BrandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }


  /**
   * Brands findMany
   */
  export type BrandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }


  /**
   * Brands create
   */
  export type BrandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The data needed to create a Brands.
     */
    data: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
  }


  /**
   * Brands createMany
   */
  export type BrandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Brands update
   */
  export type BrandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The data needed to update a Brands.
     */
    data: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
    /**
     * Choose, which Brands to update.
     */
    where: BrandsWhereUniqueInput
  }


  /**
   * Brands updateMany
   */
  export type BrandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput
  }


  /**
   * Brands upsert
   */
  export type BrandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The filter to search for the Brands to update in case it exists.
     */
    where: BrandsWhereUniqueInput
    /**
     * In case the Brands found by the `where` argument doesn't exist, create a new Brands with this data.
     */
    create: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
    /**
     * In case the Brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
  }


  /**
   * Brands delete
   */
  export type BrandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter which Brands to delete.
     */
    where: BrandsWhereUniqueInput
  }


  /**
   * Brands deleteMany
   */
  export type BrandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandsWhereInput
  }


  /**
   * Brands.Details
   */
  export type Brands$DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    where?: BrandsDetailsWhereInput
  }


  /**
   * Brands without action
   */
  export type BrandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsInclude<ExtArgs> | null
  }



  /**
   * Model BrandsDetails
   */

  export type AggregateBrandsDetails = {
    _count: BrandsDetailsCountAggregateOutputType | null
    _avg: BrandsDetailsAvgAggregateOutputType | null
    _sum: BrandsDetailsSumAggregateOutputType | null
    _min: BrandsDetailsMinAggregateOutputType | null
    _max: BrandsDetailsMaxAggregateOutputType | null
  }

  export type BrandsDetailsAvgAggregateOutputType = {
    id: number | null
    no_Of_Posts_or_PromotionVideos: number | null
    campaignBudget: number | null
    authorId: number | null
  }

  export type BrandsDetailsSumAggregateOutputType = {
    id: number | null
    no_Of_Posts_or_PromotionVideos: number | null
    campaignBudget: number | null
    authorId: number | null
  }

  export type BrandsDetailsMinAggregateOutputType = {
    id: number | null
    productDescription: string | null
    productDescriptionFile: string | null
    targetAudienceDescription: string | null
    no_Of_Posts_or_PromotionVideos: number | null
    campaignGoal: string | null
    campaignBudget: number | null
    authorId: number | null
  }

  export type BrandsDetailsMaxAggregateOutputType = {
    id: number | null
    productDescription: string | null
    productDescriptionFile: string | null
    targetAudienceDescription: string | null
    no_Of_Posts_or_PromotionVideos: number | null
    campaignGoal: string | null
    campaignBudget: number | null
    authorId: number | null
  }

  export type BrandsDetailsCountAggregateOutputType = {
    id: number
    productDescription: number
    productDescriptionFile: number
    targetAudienceDescription: number
    influencerType: number
    no_Of_Posts_or_PromotionVideos: number
    campaignGoal: number
    campaignBudget: number
    authorId: number
    _all: number
  }


  export type BrandsDetailsAvgAggregateInputType = {
    id?: true
    no_Of_Posts_or_PromotionVideos?: true
    campaignBudget?: true
    authorId?: true
  }

  export type BrandsDetailsSumAggregateInputType = {
    id?: true
    no_Of_Posts_or_PromotionVideos?: true
    campaignBudget?: true
    authorId?: true
  }

  export type BrandsDetailsMinAggregateInputType = {
    id?: true
    productDescription?: true
    productDescriptionFile?: true
    targetAudienceDescription?: true
    no_Of_Posts_or_PromotionVideos?: true
    campaignGoal?: true
    campaignBudget?: true
    authorId?: true
  }

  export type BrandsDetailsMaxAggregateInputType = {
    id?: true
    productDescription?: true
    productDescriptionFile?: true
    targetAudienceDescription?: true
    no_Of_Posts_or_PromotionVideos?: true
    campaignGoal?: true
    campaignBudget?: true
    authorId?: true
  }

  export type BrandsDetailsCountAggregateInputType = {
    id?: true
    productDescription?: true
    productDescriptionFile?: true
    targetAudienceDescription?: true
    influencerType?: true
    no_Of_Posts_or_PromotionVideos?: true
    campaignGoal?: true
    campaignBudget?: true
    authorId?: true
    _all?: true
  }

  export type BrandsDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandsDetails to aggregate.
     */
    where?: BrandsDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandsDetails to fetch.
     */
    orderBy?: BrandsDetailsOrderByWithRelationInput | BrandsDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandsDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandsDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandsDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BrandsDetails
    **/
    _count?: true | BrandsDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandsDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandsDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsDetailsMaxAggregateInputType
  }

  export type GetBrandsDetailsAggregateType<T extends BrandsDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrandsDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrandsDetails[P]>
      : GetScalarType<T[P], AggregateBrandsDetails[P]>
  }




  export type BrandsDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandsDetailsWhereInput
    orderBy?: BrandsDetailsOrderByWithAggregationInput | BrandsDetailsOrderByWithAggregationInput[]
    by: BrandsDetailsScalarFieldEnum[] | BrandsDetailsScalarFieldEnum
    having?: BrandsDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsDetailsCountAggregateInputType | true
    _avg?: BrandsDetailsAvgAggregateInputType
    _sum?: BrandsDetailsSumAggregateInputType
    _min?: BrandsDetailsMinAggregateInputType
    _max?: BrandsDetailsMaxAggregateInputType
  }

  export type BrandsDetailsGroupByOutputType = {
    id: number
    productDescription: string
    productDescriptionFile: string
    targetAudienceDescription: string | null
    influencerType: string[]
    no_Of_Posts_or_PromotionVideos: number
    campaignGoal: string
    campaignBudget: number
    authorId: number
    _count: BrandsDetailsCountAggregateOutputType | null
    _avg: BrandsDetailsAvgAggregateOutputType | null
    _sum: BrandsDetailsSumAggregateOutputType | null
    _min: BrandsDetailsMinAggregateOutputType | null
    _max: BrandsDetailsMaxAggregateOutputType | null
  }

  type GetBrandsDetailsGroupByPayload<T extends BrandsDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsDetailsGroupByOutputType[P]>
        }
      >
    >


  export type BrandsDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productDescription?: boolean
    productDescriptionFile?: boolean
    targetAudienceDescription?: boolean
    influencerType?: boolean
    no_Of_Posts_or_PromotionVideos?: boolean
    campaignGoal?: boolean
    campaignBudget?: boolean
    authorId?: boolean
    author?: boolean | BrandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brandsDetails"]>

  export type BrandsDetailsSelectScalar = {
    id?: boolean
    productDescription?: boolean
    productDescriptionFile?: boolean
    targetAudienceDescription?: boolean
    influencerType?: boolean
    no_Of_Posts_or_PromotionVideos?: boolean
    campaignGoal?: boolean
    campaignBudget?: boolean
    authorId?: boolean
  }

  export type BrandsDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | BrandsDefaultArgs<ExtArgs>
  }


  export type $BrandsDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BrandsDetails"
    objects: {
      author: Prisma.$BrandsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productDescription: string
      productDescriptionFile: string
      targetAudienceDescription: string | null
      influencerType: string[]
      no_Of_Posts_or_PromotionVideos: number
      campaignGoal: string
      campaignBudget: number
      authorId: number
    }, ExtArgs["result"]["brandsDetails"]>
    composites: {}
  }


  type BrandsDetailsGetPayload<S extends boolean | null | undefined | BrandsDetailsDefaultArgs> = $Result.GetResult<Prisma.$BrandsDetailsPayload, S>

  type BrandsDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BrandsDetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BrandsDetailsCountAggregateInputType | true
    }

  export interface BrandsDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BrandsDetails'], meta: { name: 'BrandsDetails' } }
    /**
     * Find zero or one BrandsDetails that matches the filter.
     * @param {BrandsDetailsFindUniqueArgs} args - Arguments to find a BrandsDetails
     * @example
     * // Get one BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandsDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BrandsDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandsDetailsFindUniqueOrThrowArgs} args - Arguments to find a BrandsDetails
     * @example
     * // Get one BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandsDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BrandsDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsDetailsFindFirstArgs} args - Arguments to find a BrandsDetails
     * @example
     * // Get one BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandsDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BrandsDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsDetailsFindFirstOrThrowArgs} args - Arguments to find a BrandsDetails
     * @example
     * // Get one BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandsDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BrandsDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.findMany()
     * 
     * // Get first 10 BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsDetailsWithIdOnly = await prisma.brandsDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandsDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BrandsDetails.
     * @param {BrandsDetailsCreateArgs} args - Arguments to create a BrandsDetails.
     * @example
     * // Create one BrandsDetails
     * const BrandsDetails = await prisma.brandsDetails.create({
     *   data: {
     *     // ... data to create a BrandsDetails
     *   }
     * })
     * 
    **/
    create<T extends BrandsDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsDetailsCreateArgs<ExtArgs>>
    ): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BrandsDetails.
     *     @param {BrandsDetailsCreateManyArgs} args - Arguments to create many BrandsDetails.
     *     @example
     *     // Create many BrandsDetails
     *     const brandsDetails = await prisma.brandsDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandsDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BrandsDetails.
     * @param {BrandsDetailsDeleteArgs} args - Arguments to delete one BrandsDetails.
     * @example
     * // Delete one BrandsDetails
     * const BrandsDetails = await prisma.brandsDetails.delete({
     *   where: {
     *     // ... filter to delete one BrandsDetails
     *   }
     * })
     * 
    **/
    delete<T extends BrandsDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsDetailsDeleteArgs<ExtArgs>>
    ): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BrandsDetails.
     * @param {BrandsDetailsUpdateArgs} args - Arguments to update one BrandsDetails.
     * @example
     * // Update one BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandsDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsDetailsUpdateArgs<ExtArgs>>
    ): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BrandsDetails.
     * @param {BrandsDetailsDeleteManyArgs} args - Arguments to filter BrandsDetails to delete.
     * @example
     * // Delete a few BrandsDetails
     * const { count } = await prisma.brandsDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandsDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BrandsDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BrandsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandsDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BrandsDetails.
     * @param {BrandsDetailsUpsertArgs} args - Arguments to update or create a BrandsDetails.
     * @example
     * // Update or create a BrandsDetails
     * const brandsDetails = await prisma.brandsDetails.upsert({
     *   create: {
     *     // ... data to create a BrandsDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BrandsDetails we want to update
     *   }
     * })
    **/
    upsert<T extends BrandsDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BrandsDetailsUpsertArgs<ExtArgs>>
    ): Prisma__BrandsDetailsClient<$Result.GetResult<Prisma.$BrandsDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BrandsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsDetailsCountArgs} args - Arguments to filter BrandsDetails to count.
     * @example
     * // Count the number of BrandsDetails
     * const count = await prisma.brandsDetails.count({
     *   where: {
     *     // ... the filter for the BrandsDetails we want to count
     *   }
     * })
    **/
    count<T extends BrandsDetailsCountArgs>(
      args?: Subset<T, BrandsDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BrandsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandsDetailsAggregateArgs>(args: Subset<T, BrandsDetailsAggregateArgs>): Prisma.PrismaPromise<GetBrandsDetailsAggregateType<T>>

    /**
     * Group by BrandsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandsDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandsDetailsGroupByArgs['orderBy'] }
        : { orderBy?: BrandsDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandsDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BrandsDetails model
   */
  readonly fields: BrandsDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BrandsDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandsDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends BrandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandsDefaultArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BrandsDetails model
   */ 
  interface BrandsDetailsFieldRefs {
    readonly id: FieldRef<"BrandsDetails", 'Int'>
    readonly productDescription: FieldRef<"BrandsDetails", 'String'>
    readonly productDescriptionFile: FieldRef<"BrandsDetails", 'String'>
    readonly targetAudienceDescription: FieldRef<"BrandsDetails", 'String'>
    readonly influencerType: FieldRef<"BrandsDetails", 'String[]'>
    readonly no_Of_Posts_or_PromotionVideos: FieldRef<"BrandsDetails", 'Int'>
    readonly campaignGoal: FieldRef<"BrandsDetails", 'String'>
    readonly campaignBudget: FieldRef<"BrandsDetails", 'Int'>
    readonly authorId: FieldRef<"BrandsDetails", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * BrandsDetails findUnique
   */
  export type BrandsDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BrandsDetails to fetch.
     */
    where: BrandsDetailsWhereUniqueInput
  }


  /**
   * BrandsDetails findUniqueOrThrow
   */
  export type BrandsDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BrandsDetails to fetch.
     */
    where: BrandsDetailsWhereUniqueInput
  }


  /**
   * BrandsDetails findFirst
   */
  export type BrandsDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BrandsDetails to fetch.
     */
    where?: BrandsDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandsDetails to fetch.
     */
    orderBy?: BrandsDetailsOrderByWithRelationInput | BrandsDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandsDetails.
     */
    cursor?: BrandsDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandsDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandsDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandsDetails.
     */
    distinct?: BrandsDetailsScalarFieldEnum | BrandsDetailsScalarFieldEnum[]
  }


  /**
   * BrandsDetails findFirstOrThrow
   */
  export type BrandsDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BrandsDetails to fetch.
     */
    where?: BrandsDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandsDetails to fetch.
     */
    orderBy?: BrandsDetailsOrderByWithRelationInput | BrandsDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BrandsDetails.
     */
    cursor?: BrandsDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandsDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandsDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BrandsDetails.
     */
    distinct?: BrandsDetailsScalarFieldEnum | BrandsDetailsScalarFieldEnum[]
  }


  /**
   * BrandsDetails findMany
   */
  export type BrandsDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * Filter, which BrandsDetails to fetch.
     */
    where?: BrandsDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BrandsDetails to fetch.
     */
    orderBy?: BrandsDetailsOrderByWithRelationInput | BrandsDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BrandsDetails.
     */
    cursor?: BrandsDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BrandsDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BrandsDetails.
     */
    skip?: number
    distinct?: BrandsDetailsScalarFieldEnum | BrandsDetailsScalarFieldEnum[]
  }


  /**
   * BrandsDetails create
   */
  export type BrandsDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a BrandsDetails.
     */
    data: XOR<BrandsDetailsCreateInput, BrandsDetailsUncheckedCreateInput>
  }


  /**
   * BrandsDetails createMany
   */
  export type BrandsDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BrandsDetails.
     */
    data: BrandsDetailsCreateManyInput | BrandsDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BrandsDetails update
   */
  export type BrandsDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a BrandsDetails.
     */
    data: XOR<BrandsDetailsUpdateInput, BrandsDetailsUncheckedUpdateInput>
    /**
     * Choose, which BrandsDetails to update.
     */
    where: BrandsDetailsWhereUniqueInput
  }


  /**
   * BrandsDetails updateMany
   */
  export type BrandsDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BrandsDetails.
     */
    data: XOR<BrandsDetailsUpdateManyMutationInput, BrandsDetailsUncheckedUpdateManyInput>
    /**
     * Filter which BrandsDetails to update
     */
    where?: BrandsDetailsWhereInput
  }


  /**
   * BrandsDetails upsert
   */
  export type BrandsDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the BrandsDetails to update in case it exists.
     */
    where: BrandsDetailsWhereUniqueInput
    /**
     * In case the BrandsDetails found by the `where` argument doesn't exist, create a new BrandsDetails with this data.
     */
    create: XOR<BrandsDetailsCreateInput, BrandsDetailsUncheckedCreateInput>
    /**
     * In case the BrandsDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandsDetailsUpdateInput, BrandsDetailsUncheckedUpdateInput>
  }


  /**
   * BrandsDetails delete
   */
  export type BrandsDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
    /**
     * Filter which BrandsDetails to delete.
     */
    where: BrandsDetailsWhereUniqueInput
  }


  /**
   * BrandsDetails deleteMany
   */
  export type BrandsDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BrandsDetails to delete
     */
    where?: BrandsDetailsWhereInput
  }


  /**
   * BrandsDetails without action
   */
  export type BrandsDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsDetails
     */
    select?: BrandsDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandsDetailsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InfluencersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    insta_username: 'insta_username',
    name: 'name'
  };

  export type InfluencersScalarFieldEnum = (typeof InfluencersScalarFieldEnum)[keyof typeof InfluencersScalarFieldEnum]


  export const InfluencerDetailScalarFieldEnum: {
    id: 'id',
    contentType: 'contentType',
    influencerType: 'influencerType',
    audienceAge: 'audienceAge',
    posts: 'posts',
    platformLink: 'platformLink',
    authorId: 'authorId'
  };

  export type InfluencerDetailScalarFieldEnum = (typeof InfluencerDetailScalarFieldEnum)[keyof typeof InfluencerDetailScalarFieldEnum]


  export const BrandsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    insta_username: 'insta_username',
    companyName: 'companyName'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const BrandsDetailsScalarFieldEnum: {
    id: 'id',
    productDescription: 'productDescription',
    productDescriptionFile: 'productDescriptionFile',
    targetAudienceDescription: 'targetAudienceDescription',
    influencerType: 'influencerType',
    no_Of_Posts_or_PromotionVideos: 'no_Of_Posts_or_PromotionVideos',
    campaignGoal: 'campaignGoal',
    campaignBudget: 'campaignBudget',
    authorId: 'authorId'
  };

  export type BrandsDetailsScalarFieldEnum = (typeof BrandsDetailsScalarFieldEnum)[keyof typeof BrandsDetailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type InfluencersWhereInput = {
    AND?: InfluencersWhereInput | InfluencersWhereInput[]
    OR?: InfluencersWhereInput[]
    NOT?: InfluencersWhereInput | InfluencersWhereInput[]
    id?: IntFilter<"Influencers"> | number
    email?: StringFilter<"Influencers"> | string
    insta_username?: StringFilter<"Influencers"> | string
    name?: StringNullableFilter<"Influencers"> | string | null
    Details?: XOR<InfluencerDetailNullableRelationFilter, InfluencerDetailWhereInput> | null
  }

  export type InfluencersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    name?: SortOrderInput | SortOrder
    Details?: InfluencerDetailOrderByWithRelationInput
  }

  export type InfluencersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    insta_username?: string
    AND?: InfluencersWhereInput | InfluencersWhereInput[]
    OR?: InfluencersWhereInput[]
    NOT?: InfluencersWhereInput | InfluencersWhereInput[]
    name?: StringNullableFilter<"Influencers"> | string | null
    Details?: XOR<InfluencerDetailNullableRelationFilter, InfluencerDetailWhereInput> | null
  }, "id" | "email" | "insta_username">

  export type InfluencersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: InfluencersCountOrderByAggregateInput
    _avg?: InfluencersAvgOrderByAggregateInput
    _max?: InfluencersMaxOrderByAggregateInput
    _min?: InfluencersMinOrderByAggregateInput
    _sum?: InfluencersSumOrderByAggregateInput
  }

  export type InfluencersScalarWhereWithAggregatesInput = {
    AND?: InfluencersScalarWhereWithAggregatesInput | InfluencersScalarWhereWithAggregatesInput[]
    OR?: InfluencersScalarWhereWithAggregatesInput[]
    NOT?: InfluencersScalarWhereWithAggregatesInput | InfluencersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Influencers"> | number
    email?: StringWithAggregatesFilter<"Influencers"> | string
    insta_username?: StringWithAggregatesFilter<"Influencers"> | string
    name?: StringNullableWithAggregatesFilter<"Influencers"> | string | null
  }

  export type InfluencerDetailWhereInput = {
    AND?: InfluencerDetailWhereInput | InfluencerDetailWhereInput[]
    OR?: InfluencerDetailWhereInput[]
    NOT?: InfluencerDetailWhereInput | InfluencerDetailWhereInput[]
    id?: IntFilter<"InfluencerDetail"> | number
    contentType?: StringNullableListFilter<"InfluencerDetail">
    influencerType?: StringNullableListFilter<"InfluencerDetail">
    audienceAge?: IntFilter<"InfluencerDetail"> | number
    posts?: StringFilter<"InfluencerDetail"> | string
    platformLink?: StringNullableListFilter<"InfluencerDetail">
    authorId?: IntFilter<"InfluencerDetail"> | number
    author?: XOR<InfluencersRelationFilter, InfluencersWhereInput>
  }

  export type InfluencerDetailOrderByWithRelationInput = {
    id?: SortOrder
    contentType?: SortOrder
    influencerType?: SortOrder
    audienceAge?: SortOrder
    posts?: SortOrder
    platformLink?: SortOrder
    authorId?: SortOrder
    author?: InfluencersOrderByWithRelationInput
  }

  export type InfluencerDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    authorId?: number
    AND?: InfluencerDetailWhereInput | InfluencerDetailWhereInput[]
    OR?: InfluencerDetailWhereInput[]
    NOT?: InfluencerDetailWhereInput | InfluencerDetailWhereInput[]
    contentType?: StringNullableListFilter<"InfluencerDetail">
    influencerType?: StringNullableListFilter<"InfluencerDetail">
    audienceAge?: IntFilter<"InfluencerDetail"> | number
    posts?: StringFilter<"InfluencerDetail"> | string
    platformLink?: StringNullableListFilter<"InfluencerDetail">
    author?: XOR<InfluencersRelationFilter, InfluencersWhereInput>
  }, "id" | "authorId">

  export type InfluencerDetailOrderByWithAggregationInput = {
    id?: SortOrder
    contentType?: SortOrder
    influencerType?: SortOrder
    audienceAge?: SortOrder
    posts?: SortOrder
    platformLink?: SortOrder
    authorId?: SortOrder
    _count?: InfluencerDetailCountOrderByAggregateInput
    _avg?: InfluencerDetailAvgOrderByAggregateInput
    _max?: InfluencerDetailMaxOrderByAggregateInput
    _min?: InfluencerDetailMinOrderByAggregateInput
    _sum?: InfluencerDetailSumOrderByAggregateInput
  }

  export type InfluencerDetailScalarWhereWithAggregatesInput = {
    AND?: InfluencerDetailScalarWhereWithAggregatesInput | InfluencerDetailScalarWhereWithAggregatesInput[]
    OR?: InfluencerDetailScalarWhereWithAggregatesInput[]
    NOT?: InfluencerDetailScalarWhereWithAggregatesInput | InfluencerDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InfluencerDetail"> | number
    contentType?: StringNullableListFilter<"InfluencerDetail">
    influencerType?: StringNullableListFilter<"InfluencerDetail">
    audienceAge?: IntWithAggregatesFilter<"InfluencerDetail"> | number
    posts?: StringWithAggregatesFilter<"InfluencerDetail"> | string
    platformLink?: StringNullableListFilter<"InfluencerDetail">
    authorId?: IntWithAggregatesFilter<"InfluencerDetail"> | number
  }

  export type BrandsWhereInput = {
    AND?: BrandsWhereInput | BrandsWhereInput[]
    OR?: BrandsWhereInput[]
    NOT?: BrandsWhereInput | BrandsWhereInput[]
    id?: IntFilter<"Brands"> | number
    email?: StringFilter<"Brands"> | string
    insta_username?: StringFilter<"Brands"> | string
    companyName?: StringFilter<"Brands"> | string
    Details?: XOR<BrandsDetailsNullableRelationFilter, BrandsDetailsWhereInput> | null
  }

  export type BrandsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    companyName?: SortOrder
    Details?: BrandsDetailsOrderByWithRelationInput
  }

  export type BrandsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    insta_username?: string
    AND?: BrandsWhereInput | BrandsWhereInput[]
    OR?: BrandsWhereInput[]
    NOT?: BrandsWhereInput | BrandsWhereInput[]
    companyName?: StringFilter<"Brands"> | string
    Details?: XOR<BrandsDetailsNullableRelationFilter, BrandsDetailsWhereInput> | null
  }, "id" | "email" | "insta_username">

  export type BrandsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    companyName?: SortOrder
    _count?: BrandsCountOrderByAggregateInput
    _avg?: BrandsAvgOrderByAggregateInput
    _max?: BrandsMaxOrderByAggregateInput
    _min?: BrandsMinOrderByAggregateInput
    _sum?: BrandsSumOrderByAggregateInput
  }

  export type BrandsScalarWhereWithAggregatesInput = {
    AND?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[]
    OR?: BrandsScalarWhereWithAggregatesInput[]
    NOT?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brands"> | number
    email?: StringWithAggregatesFilter<"Brands"> | string
    insta_username?: StringWithAggregatesFilter<"Brands"> | string
    companyName?: StringWithAggregatesFilter<"Brands"> | string
  }

  export type BrandsDetailsWhereInput = {
    AND?: BrandsDetailsWhereInput | BrandsDetailsWhereInput[]
    OR?: BrandsDetailsWhereInput[]
    NOT?: BrandsDetailsWhereInput | BrandsDetailsWhereInput[]
    id?: IntFilter<"BrandsDetails"> | number
    productDescription?: StringFilter<"BrandsDetails"> | string
    productDescriptionFile?: StringFilter<"BrandsDetails"> | string
    targetAudienceDescription?: StringNullableFilter<"BrandsDetails"> | string | null
    influencerType?: StringNullableListFilter<"BrandsDetails">
    no_Of_Posts_or_PromotionVideos?: IntFilter<"BrandsDetails"> | number
    campaignGoal?: StringFilter<"BrandsDetails"> | string
    campaignBudget?: IntFilter<"BrandsDetails"> | number
    authorId?: IntFilter<"BrandsDetails"> | number
    author?: XOR<BrandsRelationFilter, BrandsWhereInput>
  }

  export type BrandsDetailsOrderByWithRelationInput = {
    id?: SortOrder
    productDescription?: SortOrder
    productDescriptionFile?: SortOrder
    targetAudienceDescription?: SortOrderInput | SortOrder
    influencerType?: SortOrder
    no_Of_Posts_or_PromotionVideos?: SortOrder
    campaignGoal?: SortOrder
    campaignBudget?: SortOrder
    authorId?: SortOrder
    author?: BrandsOrderByWithRelationInput
  }

  export type BrandsDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    authorId?: number
    AND?: BrandsDetailsWhereInput | BrandsDetailsWhereInput[]
    OR?: BrandsDetailsWhereInput[]
    NOT?: BrandsDetailsWhereInput | BrandsDetailsWhereInput[]
    productDescription?: StringFilter<"BrandsDetails"> | string
    productDescriptionFile?: StringFilter<"BrandsDetails"> | string
    targetAudienceDescription?: StringNullableFilter<"BrandsDetails"> | string | null
    influencerType?: StringNullableListFilter<"BrandsDetails">
    no_Of_Posts_or_PromotionVideos?: IntFilter<"BrandsDetails"> | number
    campaignGoal?: StringFilter<"BrandsDetails"> | string
    campaignBudget?: IntFilter<"BrandsDetails"> | number
    author?: XOR<BrandsRelationFilter, BrandsWhereInput>
  }, "id" | "authorId">

  export type BrandsDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    productDescription?: SortOrder
    productDescriptionFile?: SortOrder
    targetAudienceDescription?: SortOrderInput | SortOrder
    influencerType?: SortOrder
    no_Of_Posts_or_PromotionVideos?: SortOrder
    campaignGoal?: SortOrder
    campaignBudget?: SortOrder
    authorId?: SortOrder
    _count?: BrandsDetailsCountOrderByAggregateInput
    _avg?: BrandsDetailsAvgOrderByAggregateInput
    _max?: BrandsDetailsMaxOrderByAggregateInput
    _min?: BrandsDetailsMinOrderByAggregateInput
    _sum?: BrandsDetailsSumOrderByAggregateInput
  }

  export type BrandsDetailsScalarWhereWithAggregatesInput = {
    AND?: BrandsDetailsScalarWhereWithAggregatesInput | BrandsDetailsScalarWhereWithAggregatesInput[]
    OR?: BrandsDetailsScalarWhereWithAggregatesInput[]
    NOT?: BrandsDetailsScalarWhereWithAggregatesInput | BrandsDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BrandsDetails"> | number
    productDescription?: StringWithAggregatesFilter<"BrandsDetails"> | string
    productDescriptionFile?: StringWithAggregatesFilter<"BrandsDetails"> | string
    targetAudienceDescription?: StringNullableWithAggregatesFilter<"BrandsDetails"> | string | null
    influencerType?: StringNullableListFilter<"BrandsDetails">
    no_Of_Posts_or_PromotionVideos?: IntWithAggregatesFilter<"BrandsDetails"> | number
    campaignGoal?: StringWithAggregatesFilter<"BrandsDetails"> | string
    campaignBudget?: IntWithAggregatesFilter<"BrandsDetails"> | number
    authorId?: IntWithAggregatesFilter<"BrandsDetails"> | number
  }

  export type InfluencersCreateInput = {
    email: string
    insta_username: string
    name?: string | null
    Details?: InfluencerDetailCreateNestedOneWithoutAuthorInput
  }

  export type InfluencersUncheckedCreateInput = {
    id?: number
    email: string
    insta_username: string
    name?: string | null
    Details?: InfluencerDetailUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type InfluencersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Details?: InfluencerDetailUpdateOneWithoutAuthorNestedInput
  }

  export type InfluencersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    Details?: InfluencerDetailUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type InfluencersCreateManyInput = {
    id?: number
    email: string
    insta_username: string
    name?: string | null
  }

  export type InfluencersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfluencersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfluencerDetailCreateInput = {
    contentType?: InfluencerDetailCreatecontentTypeInput | string[]
    influencerType?: InfluencerDetailCreateinfluencerTypeInput | string[]
    audienceAge: number
    posts: string
    platformLink?: InfluencerDetailCreateplatformLinkInput | string[]
    author: InfluencersCreateNestedOneWithoutDetailsInput
  }

  export type InfluencerDetailUncheckedCreateInput = {
    id?: number
    contentType?: InfluencerDetailCreatecontentTypeInput | string[]
    influencerType?: InfluencerDetailCreateinfluencerTypeInput | string[]
    audienceAge: number
    posts: string
    platformLink?: InfluencerDetailCreateplatformLinkInput | string[]
    authorId: number
  }

  export type InfluencerDetailUpdateInput = {
    contentType?: InfluencerDetailUpdatecontentTypeInput | string[]
    influencerType?: InfluencerDetailUpdateinfluencerTypeInput | string[]
    audienceAge?: IntFieldUpdateOperationsInput | number
    posts?: StringFieldUpdateOperationsInput | string
    platformLink?: InfluencerDetailUpdateplatformLinkInput | string[]
    author?: InfluencersUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type InfluencerDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contentType?: InfluencerDetailUpdatecontentTypeInput | string[]
    influencerType?: InfluencerDetailUpdateinfluencerTypeInput | string[]
    audienceAge?: IntFieldUpdateOperationsInput | number
    posts?: StringFieldUpdateOperationsInput | string
    platformLink?: InfluencerDetailUpdateplatformLinkInput | string[]
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type InfluencerDetailCreateManyInput = {
    id?: number
    contentType?: InfluencerDetailCreatecontentTypeInput | string[]
    influencerType?: InfluencerDetailCreateinfluencerTypeInput | string[]
    audienceAge: number
    posts: string
    platformLink?: InfluencerDetailCreateplatformLinkInput | string[]
    authorId: number
  }

  export type InfluencerDetailUpdateManyMutationInput = {
    contentType?: InfluencerDetailUpdatecontentTypeInput | string[]
    influencerType?: InfluencerDetailUpdateinfluencerTypeInput | string[]
    audienceAge?: IntFieldUpdateOperationsInput | number
    posts?: StringFieldUpdateOperationsInput | string
    platformLink?: InfluencerDetailUpdateplatformLinkInput | string[]
  }

  export type InfluencerDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contentType?: InfluencerDetailUpdatecontentTypeInput | string[]
    influencerType?: InfluencerDetailUpdateinfluencerTypeInput | string[]
    audienceAge?: IntFieldUpdateOperationsInput | number
    posts?: StringFieldUpdateOperationsInput | string
    platformLink?: InfluencerDetailUpdateplatformLinkInput | string[]
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BrandsCreateInput = {
    email: string
    insta_username: string
    companyName: string
    Details?: BrandsDetailsCreateNestedOneWithoutAuthorInput
  }

  export type BrandsUncheckedCreateInput = {
    id?: number
    email: string
    insta_username: string
    companyName: string
    Details?: BrandsDetailsUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type BrandsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    Details?: BrandsDetailsUpdateOneWithoutAuthorNestedInput
  }

  export type BrandsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    Details?: BrandsDetailsUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type BrandsCreateManyInput = {
    id?: number
    email: string
    insta_username: string
    companyName: string
  }

  export type BrandsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type BrandsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type BrandsDetailsCreateInput = {
    productDescription: string
    productDescriptionFile: string
    targetAudienceDescription?: string | null
    influencerType?: BrandsDetailsCreateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos: number
    campaignGoal: string
    campaignBudget: number
    author: BrandsCreateNestedOneWithoutDetailsInput
  }

  export type BrandsDetailsUncheckedCreateInput = {
    id?: number
    productDescription: string
    productDescriptionFile: string
    targetAudienceDescription?: string | null
    influencerType?: BrandsDetailsCreateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos: number
    campaignGoal: string
    campaignBudget: number
    authorId: number
  }

  export type BrandsDetailsUpdateInput = {
    productDescription?: StringFieldUpdateOperationsInput | string
    productDescriptionFile?: StringFieldUpdateOperationsInput | string
    targetAudienceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    influencerType?: BrandsDetailsUpdateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos?: IntFieldUpdateOperationsInput | number
    campaignGoal?: StringFieldUpdateOperationsInput | string
    campaignBudget?: IntFieldUpdateOperationsInput | number
    author?: BrandsUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type BrandsDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDescription?: StringFieldUpdateOperationsInput | string
    productDescriptionFile?: StringFieldUpdateOperationsInput | string
    targetAudienceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    influencerType?: BrandsDetailsUpdateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos?: IntFieldUpdateOperationsInput | number
    campaignGoal?: StringFieldUpdateOperationsInput | string
    campaignBudget?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BrandsDetailsCreateManyInput = {
    id?: number
    productDescription: string
    productDescriptionFile: string
    targetAudienceDescription?: string | null
    influencerType?: BrandsDetailsCreateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos: number
    campaignGoal: string
    campaignBudget: number
    authorId: number
  }

  export type BrandsDetailsUpdateManyMutationInput = {
    productDescription?: StringFieldUpdateOperationsInput | string
    productDescriptionFile?: StringFieldUpdateOperationsInput | string
    targetAudienceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    influencerType?: BrandsDetailsUpdateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos?: IntFieldUpdateOperationsInput | number
    campaignGoal?: StringFieldUpdateOperationsInput | string
    campaignBudget?: IntFieldUpdateOperationsInput | number
  }

  export type BrandsDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDescription?: StringFieldUpdateOperationsInput | string
    productDescriptionFile?: StringFieldUpdateOperationsInput | string
    targetAudienceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    influencerType?: BrandsDetailsUpdateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos?: IntFieldUpdateOperationsInput | number
    campaignGoal?: StringFieldUpdateOperationsInput | string
    campaignBudget?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InfluencerDetailNullableRelationFilter = {
    is?: InfluencerDetailWhereInput | null
    isNot?: InfluencerDetailWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InfluencersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    name?: SortOrder
  }

  export type InfluencersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InfluencersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    name?: SortOrder
  }

  export type InfluencersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    name?: SortOrder
  }

  export type InfluencersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type InfluencersRelationFilter = {
    is?: InfluencersWhereInput
    isNot?: InfluencersWhereInput
  }

  export type InfluencerDetailCountOrderByAggregateInput = {
    id?: SortOrder
    contentType?: SortOrder
    influencerType?: SortOrder
    audienceAge?: SortOrder
    posts?: SortOrder
    platformLink?: SortOrder
    authorId?: SortOrder
  }

  export type InfluencerDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    audienceAge?: SortOrder
    authorId?: SortOrder
  }

  export type InfluencerDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    audienceAge?: SortOrder
    posts?: SortOrder
    authorId?: SortOrder
  }

  export type InfluencerDetailMinOrderByAggregateInput = {
    id?: SortOrder
    audienceAge?: SortOrder
    posts?: SortOrder
    authorId?: SortOrder
  }

  export type InfluencerDetailSumOrderByAggregateInput = {
    id?: SortOrder
    audienceAge?: SortOrder
    authorId?: SortOrder
  }

  export type BrandsDetailsNullableRelationFilter = {
    is?: BrandsDetailsWhereInput | null
    isNot?: BrandsDetailsWhereInput | null
  }

  export type BrandsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    companyName?: SortOrder
  }

  export type BrandsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    companyName?: SortOrder
  }

  export type BrandsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    insta_username?: SortOrder
    companyName?: SortOrder
  }

  export type BrandsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandsRelationFilter = {
    is?: BrandsWhereInput
    isNot?: BrandsWhereInput
  }

  export type BrandsDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    productDescription?: SortOrder
    productDescriptionFile?: SortOrder
    targetAudienceDescription?: SortOrder
    influencerType?: SortOrder
    no_Of_Posts_or_PromotionVideos?: SortOrder
    campaignGoal?: SortOrder
    campaignBudget?: SortOrder
    authorId?: SortOrder
  }

  export type BrandsDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    no_Of_Posts_or_PromotionVideos?: SortOrder
    campaignBudget?: SortOrder
    authorId?: SortOrder
  }

  export type BrandsDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    productDescription?: SortOrder
    productDescriptionFile?: SortOrder
    targetAudienceDescription?: SortOrder
    no_Of_Posts_or_PromotionVideos?: SortOrder
    campaignGoal?: SortOrder
    campaignBudget?: SortOrder
    authorId?: SortOrder
  }

  export type BrandsDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    productDescription?: SortOrder
    productDescriptionFile?: SortOrder
    targetAudienceDescription?: SortOrder
    no_Of_Posts_or_PromotionVideos?: SortOrder
    campaignGoal?: SortOrder
    campaignBudget?: SortOrder
    authorId?: SortOrder
  }

  export type BrandsDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    no_Of_Posts_or_PromotionVideos?: SortOrder
    campaignBudget?: SortOrder
    authorId?: SortOrder
  }

  export type InfluencerDetailCreateNestedOneWithoutAuthorInput = {
    create?: XOR<InfluencerDetailCreateWithoutAuthorInput, InfluencerDetailUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: InfluencerDetailCreateOrConnectWithoutAuthorInput
    connect?: InfluencerDetailWhereUniqueInput
  }

  export type InfluencerDetailUncheckedCreateNestedOneWithoutAuthorInput = {
    create?: XOR<InfluencerDetailCreateWithoutAuthorInput, InfluencerDetailUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: InfluencerDetailCreateOrConnectWithoutAuthorInput
    connect?: InfluencerDetailWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InfluencerDetailUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<InfluencerDetailCreateWithoutAuthorInput, InfluencerDetailUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: InfluencerDetailCreateOrConnectWithoutAuthorInput
    upsert?: InfluencerDetailUpsertWithoutAuthorInput
    disconnect?: InfluencerDetailWhereInput | boolean
    delete?: InfluencerDetailWhereInput | boolean
    connect?: InfluencerDetailWhereUniqueInput
    update?: XOR<XOR<InfluencerDetailUpdateToOneWithWhereWithoutAuthorInput, InfluencerDetailUpdateWithoutAuthorInput>, InfluencerDetailUncheckedUpdateWithoutAuthorInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InfluencerDetailUncheckedUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<InfluencerDetailCreateWithoutAuthorInput, InfluencerDetailUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: InfluencerDetailCreateOrConnectWithoutAuthorInput
    upsert?: InfluencerDetailUpsertWithoutAuthorInput
    disconnect?: InfluencerDetailWhereInput | boolean
    delete?: InfluencerDetailWhereInput | boolean
    connect?: InfluencerDetailWhereUniqueInput
    update?: XOR<XOR<InfluencerDetailUpdateToOneWithWhereWithoutAuthorInput, InfluencerDetailUpdateWithoutAuthorInput>, InfluencerDetailUncheckedUpdateWithoutAuthorInput>
  }

  export type InfluencerDetailCreatecontentTypeInput = {
    set: string[]
  }

  export type InfluencerDetailCreateinfluencerTypeInput = {
    set: string[]
  }

  export type InfluencerDetailCreateplatformLinkInput = {
    set: string[]
  }

  export type InfluencersCreateNestedOneWithoutDetailsInput = {
    create?: XOR<InfluencersCreateWithoutDetailsInput, InfluencersUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: InfluencersCreateOrConnectWithoutDetailsInput
    connect?: InfluencersWhereUniqueInput
  }

  export type InfluencerDetailUpdatecontentTypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InfluencerDetailUpdateinfluencerTypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InfluencerDetailUpdateplatformLinkInput = {
    set?: string[]
    push?: string | string[]
  }

  export type InfluencersUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<InfluencersCreateWithoutDetailsInput, InfluencersUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: InfluencersCreateOrConnectWithoutDetailsInput
    upsert?: InfluencersUpsertWithoutDetailsInput
    connect?: InfluencersWhereUniqueInput
    update?: XOR<XOR<InfluencersUpdateToOneWithWhereWithoutDetailsInput, InfluencersUpdateWithoutDetailsInput>, InfluencersUncheckedUpdateWithoutDetailsInput>
  }

  export type BrandsDetailsCreateNestedOneWithoutAuthorInput = {
    create?: XOR<BrandsDetailsCreateWithoutAuthorInput, BrandsDetailsUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: BrandsDetailsCreateOrConnectWithoutAuthorInput
    connect?: BrandsDetailsWhereUniqueInput
  }

  export type BrandsDetailsUncheckedCreateNestedOneWithoutAuthorInput = {
    create?: XOR<BrandsDetailsCreateWithoutAuthorInput, BrandsDetailsUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: BrandsDetailsCreateOrConnectWithoutAuthorInput
    connect?: BrandsDetailsWhereUniqueInput
  }

  export type BrandsDetailsUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<BrandsDetailsCreateWithoutAuthorInput, BrandsDetailsUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: BrandsDetailsCreateOrConnectWithoutAuthorInput
    upsert?: BrandsDetailsUpsertWithoutAuthorInput
    disconnect?: BrandsDetailsWhereInput | boolean
    delete?: BrandsDetailsWhereInput | boolean
    connect?: BrandsDetailsWhereUniqueInput
    update?: XOR<XOR<BrandsDetailsUpdateToOneWithWhereWithoutAuthorInput, BrandsDetailsUpdateWithoutAuthorInput>, BrandsDetailsUncheckedUpdateWithoutAuthorInput>
  }

  export type BrandsDetailsUncheckedUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<BrandsDetailsCreateWithoutAuthorInput, BrandsDetailsUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: BrandsDetailsCreateOrConnectWithoutAuthorInput
    upsert?: BrandsDetailsUpsertWithoutAuthorInput
    disconnect?: BrandsDetailsWhereInput | boolean
    delete?: BrandsDetailsWhereInput | boolean
    connect?: BrandsDetailsWhereUniqueInput
    update?: XOR<XOR<BrandsDetailsUpdateToOneWithWhereWithoutAuthorInput, BrandsDetailsUpdateWithoutAuthorInput>, BrandsDetailsUncheckedUpdateWithoutAuthorInput>
  }

  export type BrandsDetailsCreateinfluencerTypeInput = {
    set: string[]
  }

  export type BrandsCreateNestedOneWithoutDetailsInput = {
    create?: XOR<BrandsCreateWithoutDetailsInput, BrandsUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutDetailsInput
    connect?: BrandsWhereUniqueInput
  }

  export type BrandsDetailsUpdateinfluencerTypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BrandsUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<BrandsCreateWithoutDetailsInput, BrandsUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutDetailsInput
    upsert?: BrandsUpsertWithoutDetailsInput
    connect?: BrandsWhereUniqueInput
    update?: XOR<XOR<BrandsUpdateToOneWithWhereWithoutDetailsInput, BrandsUpdateWithoutDetailsInput>, BrandsUncheckedUpdateWithoutDetailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InfluencerDetailCreateWithoutAuthorInput = {
    contentType?: InfluencerDetailCreatecontentTypeInput | string[]
    influencerType?: InfluencerDetailCreateinfluencerTypeInput | string[]
    audienceAge: number
    posts: string
    platformLink?: InfluencerDetailCreateplatformLinkInput | string[]
  }

  export type InfluencerDetailUncheckedCreateWithoutAuthorInput = {
    id?: number
    contentType?: InfluencerDetailCreatecontentTypeInput | string[]
    influencerType?: InfluencerDetailCreateinfluencerTypeInput | string[]
    audienceAge: number
    posts: string
    platformLink?: InfluencerDetailCreateplatformLinkInput | string[]
  }

  export type InfluencerDetailCreateOrConnectWithoutAuthorInput = {
    where: InfluencerDetailWhereUniqueInput
    create: XOR<InfluencerDetailCreateWithoutAuthorInput, InfluencerDetailUncheckedCreateWithoutAuthorInput>
  }

  export type InfluencerDetailUpsertWithoutAuthorInput = {
    update: XOR<InfluencerDetailUpdateWithoutAuthorInput, InfluencerDetailUncheckedUpdateWithoutAuthorInput>
    create: XOR<InfluencerDetailCreateWithoutAuthorInput, InfluencerDetailUncheckedCreateWithoutAuthorInput>
    where?: InfluencerDetailWhereInput
  }

  export type InfluencerDetailUpdateToOneWithWhereWithoutAuthorInput = {
    where?: InfluencerDetailWhereInput
    data: XOR<InfluencerDetailUpdateWithoutAuthorInput, InfluencerDetailUncheckedUpdateWithoutAuthorInput>
  }

  export type InfluencerDetailUpdateWithoutAuthorInput = {
    contentType?: InfluencerDetailUpdatecontentTypeInput | string[]
    influencerType?: InfluencerDetailUpdateinfluencerTypeInput | string[]
    audienceAge?: IntFieldUpdateOperationsInput | number
    posts?: StringFieldUpdateOperationsInput | string
    platformLink?: InfluencerDetailUpdateplatformLinkInput | string[]
  }

  export type InfluencerDetailUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    contentType?: InfluencerDetailUpdatecontentTypeInput | string[]
    influencerType?: InfluencerDetailUpdateinfluencerTypeInput | string[]
    audienceAge?: IntFieldUpdateOperationsInput | number
    posts?: StringFieldUpdateOperationsInput | string
    platformLink?: InfluencerDetailUpdateplatformLinkInput | string[]
  }

  export type InfluencersCreateWithoutDetailsInput = {
    email: string
    insta_username: string
    name?: string | null
  }

  export type InfluencersUncheckedCreateWithoutDetailsInput = {
    id?: number
    email: string
    insta_username: string
    name?: string | null
  }

  export type InfluencersCreateOrConnectWithoutDetailsInput = {
    where: InfluencersWhereUniqueInput
    create: XOR<InfluencersCreateWithoutDetailsInput, InfluencersUncheckedCreateWithoutDetailsInput>
  }

  export type InfluencersUpsertWithoutDetailsInput = {
    update: XOR<InfluencersUpdateWithoutDetailsInput, InfluencersUncheckedUpdateWithoutDetailsInput>
    create: XOR<InfluencersCreateWithoutDetailsInput, InfluencersUncheckedCreateWithoutDetailsInput>
    where?: InfluencersWhereInput
  }

  export type InfluencersUpdateToOneWithWhereWithoutDetailsInput = {
    where?: InfluencersWhereInput
    data: XOR<InfluencersUpdateWithoutDetailsInput, InfluencersUncheckedUpdateWithoutDetailsInput>
  }

  export type InfluencersUpdateWithoutDetailsInput = {
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InfluencersUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandsDetailsCreateWithoutAuthorInput = {
    productDescription: string
    productDescriptionFile: string
    targetAudienceDescription?: string | null
    influencerType?: BrandsDetailsCreateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos: number
    campaignGoal: string
    campaignBudget: number
  }

  export type BrandsDetailsUncheckedCreateWithoutAuthorInput = {
    id?: number
    productDescription: string
    productDescriptionFile: string
    targetAudienceDescription?: string | null
    influencerType?: BrandsDetailsCreateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos: number
    campaignGoal: string
    campaignBudget: number
  }

  export type BrandsDetailsCreateOrConnectWithoutAuthorInput = {
    where: BrandsDetailsWhereUniqueInput
    create: XOR<BrandsDetailsCreateWithoutAuthorInput, BrandsDetailsUncheckedCreateWithoutAuthorInput>
  }

  export type BrandsDetailsUpsertWithoutAuthorInput = {
    update: XOR<BrandsDetailsUpdateWithoutAuthorInput, BrandsDetailsUncheckedUpdateWithoutAuthorInput>
    create: XOR<BrandsDetailsCreateWithoutAuthorInput, BrandsDetailsUncheckedCreateWithoutAuthorInput>
    where?: BrandsDetailsWhereInput
  }

  export type BrandsDetailsUpdateToOneWithWhereWithoutAuthorInput = {
    where?: BrandsDetailsWhereInput
    data: XOR<BrandsDetailsUpdateWithoutAuthorInput, BrandsDetailsUncheckedUpdateWithoutAuthorInput>
  }

  export type BrandsDetailsUpdateWithoutAuthorInput = {
    productDescription?: StringFieldUpdateOperationsInput | string
    productDescriptionFile?: StringFieldUpdateOperationsInput | string
    targetAudienceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    influencerType?: BrandsDetailsUpdateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos?: IntFieldUpdateOperationsInput | number
    campaignGoal?: StringFieldUpdateOperationsInput | string
    campaignBudget?: IntFieldUpdateOperationsInput | number
  }

  export type BrandsDetailsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productDescription?: StringFieldUpdateOperationsInput | string
    productDescriptionFile?: StringFieldUpdateOperationsInput | string
    targetAudienceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    influencerType?: BrandsDetailsUpdateinfluencerTypeInput | string[]
    no_Of_Posts_or_PromotionVideos?: IntFieldUpdateOperationsInput | number
    campaignGoal?: StringFieldUpdateOperationsInput | string
    campaignBudget?: IntFieldUpdateOperationsInput | number
  }

  export type BrandsCreateWithoutDetailsInput = {
    email: string
    insta_username: string
    companyName: string
  }

  export type BrandsUncheckedCreateWithoutDetailsInput = {
    id?: number
    email: string
    insta_username: string
    companyName: string
  }

  export type BrandsCreateOrConnectWithoutDetailsInput = {
    where: BrandsWhereUniqueInput
    create: XOR<BrandsCreateWithoutDetailsInput, BrandsUncheckedCreateWithoutDetailsInput>
  }

  export type BrandsUpsertWithoutDetailsInput = {
    update: XOR<BrandsUpdateWithoutDetailsInput, BrandsUncheckedUpdateWithoutDetailsInput>
    create: XOR<BrandsCreateWithoutDetailsInput, BrandsUncheckedCreateWithoutDetailsInput>
    where?: BrandsWhereInput
  }

  export type BrandsUpdateToOneWithWhereWithoutDetailsInput = {
    where?: BrandsWhereInput
    data: XOR<BrandsUpdateWithoutDetailsInput, BrandsUncheckedUpdateWithoutDetailsInput>
  }

  export type BrandsUpdateWithoutDetailsInput = {
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }

  export type BrandsUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    insta_username?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use InfluencersDefaultArgs instead
     */
    export type InfluencersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InfluencersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InfluencerDetailDefaultArgs instead
     */
    export type InfluencerDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InfluencerDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandsDefaultArgs instead
     */
    export type BrandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BrandsDetailsDefaultArgs instead
     */
    export type BrandsDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BrandsDetailsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}