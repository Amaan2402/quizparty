
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model AnswerOutbox
 * 
 */
export type AnswerOutbox = $Result.DefaultSelection<Prisma.$AnswerOutboxPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model ParticipantResult
 * 
 */
export type ParticipantResult = $Result.DefaultSelection<Prisma.$ParticipantResultPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizResultQueue
 * 
 */
export type QuizResultQueue = $Result.DefaultSelection<Prisma.$QuizResultQueuePayload>
/**
 * Model QuizResultQueueOutbox
 * 
 */
export type QuizResultQueueOutbox = $Result.DefaultSelection<Prisma.$QuizResultQueueOutboxPayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model ScoreDistribution
 * 
 */
export type ScoreDistribution = $Result.DefaultSelection<Prisma.$ScoreDistributionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserDiscord
 * 
 */
export type UserDiscord = $Result.DefaultSelection<Prisma.$UserDiscordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuizStatus: {
  CREATED: 'CREATED',
  LIVE: 'LIVE',
  STARTED: 'STARTED',
  ENDED: 'ENDED'
};

export type QuizStatus = (typeof QuizStatus)[keyof typeof QuizStatus]


export const RewardBrands: {
  amazon: 'amazon',
  flipkart: 'flipkart',
  myntra: 'myntra',
  ajio: 'ajio',
  swiggy: 'swiggy',
  zomato: 'zomato'
};

export type RewardBrands = (typeof RewardBrands)[keyof typeof RewardBrands]

}

export type QuizStatus = $Enums.QuizStatus

export const QuizStatus: typeof $Enums.QuizStatus

export type RewardBrands = $Enums.RewardBrands

export const RewardBrands: typeof $Enums.RewardBrands

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Answers
 * const answers = await prisma.answer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Answers
   * const answers = await prisma.answer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answerOutbox`: Exposes CRUD operations for the **AnswerOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnswerOutboxes
    * const answerOutboxes = await prisma.answerOutbox.findMany()
    * ```
    */
  get answerOutbox(): Prisma.AnswerOutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantResult`: Exposes CRUD operations for the **ParticipantResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantResults
    * const participantResults = await prisma.participantResult.findMany()
    * ```
    */
  get participantResult(): Prisma.ParticipantResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizResultQueue`: Exposes CRUD operations for the **QuizResultQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizResultQueues
    * const quizResultQueues = await prisma.quizResultQueue.findMany()
    * ```
    */
  get quizResultQueue(): Prisma.QuizResultQueueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizResultQueueOutbox`: Exposes CRUD operations for the **QuizResultQueueOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizResultQueueOutboxes
    * const quizResultQueueOutboxes = await prisma.quizResultQueueOutbox.findMany()
    * ```
    */
  get quizResultQueueOutbox(): Prisma.QuizResultQueueOutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scoreDistribution`: Exposes CRUD operations for the **ScoreDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoreDistributions
    * const scoreDistributions = await prisma.scoreDistribution.findMany()
    * ```
    */
  get scoreDistribution(): Prisma.ScoreDistributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDiscord`: Exposes CRUD operations for the **UserDiscord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDiscords
    * const userDiscords = await prisma.userDiscord.findMany()
    * ```
    */
  get userDiscord(): Prisma.UserDiscordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Answer: 'Answer',
    AnswerOutbox: 'AnswerOutbox',
    Participant: 'Participant',
    ParticipantResult: 'ParticipantResult',
    Question: 'Question',
    Quiz: 'Quiz',
    QuizResultQueue: 'QuizResultQueue',
    QuizResultQueueOutbox: 'QuizResultQueueOutbox',
    Reward: 'Reward',
    ScoreDistribution: 'ScoreDistribution',
    User: 'User',
    UserDiscord: 'UserDiscord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "answer" | "answerOutbox" | "participant" | "participantResult" | "question" | "quiz" | "quizResultQueue" | "quizResultQueueOutbox" | "reward" | "scoreDistribution" | "user" | "userDiscord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      AnswerOutbox: {
        payload: Prisma.$AnswerOutboxPayload<ExtArgs>
        fields: Prisma.AnswerOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>
          }
          findFirst: {
            args: Prisma.AnswerOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>
          }
          findMany: {
            args: Prisma.AnswerOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>[]
          }
          create: {
            args: Prisma.AnswerOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>
          }
          createMany: {
            args: Prisma.AnswerOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>[]
          }
          delete: {
            args: Prisma.AnswerOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>
          }
          update: {
            args: Prisma.AnswerOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>
          }
          deleteMany: {
            args: Prisma.AnswerOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>[]
          }
          upsert: {
            args: Prisma.AnswerOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerOutboxPayload>
          }
          aggregate: {
            args: Prisma.AnswerOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswerOutbox>
          }
          groupBy: {
            args: Prisma.AnswerOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerOutboxCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      ParticipantResult: {
        payload: Prisma.$ParticipantResultPayload<ExtArgs>
        fields: Prisma.ParticipantResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>
          }
          findFirst: {
            args: Prisma.ParticipantResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>
          }
          findMany: {
            args: Prisma.ParticipantResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>[]
          }
          create: {
            args: Prisma.ParticipantResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>
          }
          createMany: {
            args: Prisma.ParticipantResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>[]
          }
          delete: {
            args: Prisma.ParticipantResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>
          }
          update: {
            args: Prisma.ParticipantResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantResultPayload>
          }
          aggregate: {
            args: Prisma.ParticipantResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantResult>
          }
          groupBy: {
            args: Prisma.ParticipantResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantResultCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantResultCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizResultQueue: {
        payload: Prisma.$QuizResultQueuePayload<ExtArgs>
        fields: Prisma.QuizResultQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizResultQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizResultQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>
          }
          findFirst: {
            args: Prisma.QuizResultQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizResultQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>
          }
          findMany: {
            args: Prisma.QuizResultQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>[]
          }
          create: {
            args: Prisma.QuizResultQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>
          }
          createMany: {
            args: Prisma.QuizResultQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizResultQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>[]
          }
          delete: {
            args: Prisma.QuizResultQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>
          }
          update: {
            args: Prisma.QuizResultQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>
          }
          deleteMany: {
            args: Prisma.QuizResultQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizResultQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizResultQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>[]
          }
          upsert: {
            args: Prisma.QuizResultQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueuePayload>
          }
          aggregate: {
            args: Prisma.QuizResultQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizResultQueue>
          }
          groupBy: {
            args: Prisma.QuizResultQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizResultQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizResultQueueCountArgs<ExtArgs>
            result: $Utils.Optional<QuizResultQueueCountAggregateOutputType> | number
          }
        }
      }
      QuizResultQueueOutbox: {
        payload: Prisma.$QuizResultQueueOutboxPayload<ExtArgs>
        fields: Prisma.QuizResultQueueOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizResultQueueOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizResultQueueOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>
          }
          findFirst: {
            args: Prisma.QuizResultQueueOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizResultQueueOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>
          }
          findMany: {
            args: Prisma.QuizResultQueueOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>[]
          }
          create: {
            args: Prisma.QuizResultQueueOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>
          }
          createMany: {
            args: Prisma.QuizResultQueueOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizResultQueueOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>[]
          }
          delete: {
            args: Prisma.QuizResultQueueOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>
          }
          update: {
            args: Prisma.QuizResultQueueOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>
          }
          deleteMany: {
            args: Prisma.QuizResultQueueOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizResultQueueOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizResultQueueOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>[]
          }
          upsert: {
            args: Prisma.QuizResultQueueOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultQueueOutboxPayload>
          }
          aggregate: {
            args: Prisma.QuizResultQueueOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizResultQueueOutbox>
          }
          groupBy: {
            args: Prisma.QuizResultQueueOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizResultQueueOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizResultQueueOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<QuizResultQueueOutboxCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      ScoreDistribution: {
        payload: Prisma.$ScoreDistributionPayload<ExtArgs>
        fields: Prisma.ScoreDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>
          }
          findFirst: {
            args: Prisma.ScoreDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>
          }
          findMany: {
            args: Prisma.ScoreDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>[]
          }
          create: {
            args: Prisma.ScoreDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>
          }
          createMany: {
            args: Prisma.ScoreDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreDistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>[]
          }
          delete: {
            args: Prisma.ScoreDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>
          }
          update: {
            args: Prisma.ScoreDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>
          }
          deleteMany: {
            args: Prisma.ScoreDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreDistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>[]
          }
          upsert: {
            args: Prisma.ScoreDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreDistributionPayload>
          }
          aggregate: {
            args: Prisma.ScoreDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoreDistribution>
          }
          groupBy: {
            args: Prisma.ScoreDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreDistributionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserDiscord: {
        payload: Prisma.$UserDiscordPayload<ExtArgs>
        fields: Prisma.UserDiscordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDiscordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDiscordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>
          }
          findFirst: {
            args: Prisma.UserDiscordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDiscordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>
          }
          findMany: {
            args: Prisma.UserDiscordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>[]
          }
          create: {
            args: Prisma.UserDiscordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>
          }
          createMany: {
            args: Prisma.UserDiscordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDiscordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>[]
          }
          delete: {
            args: Prisma.UserDiscordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>
          }
          update: {
            args: Prisma.UserDiscordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>
          }
          deleteMany: {
            args: Prisma.UserDiscordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDiscordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDiscordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>[]
          }
          upsert: {
            args: Prisma.UserDiscordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscordPayload>
          }
          aggregate: {
            args: Prisma.UserDiscordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDiscord>
          }
          groupBy: {
            args: Prisma.UserDiscordGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDiscordGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDiscordCountArgs<ExtArgs>
            result: $Utils.Optional<UserDiscordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    answer?: AnswerOmit
    answerOutbox?: AnswerOutboxOmit
    participant?: ParticipantOmit
    participantResult?: ParticipantResultOmit
    question?: QuestionOmit
    quiz?: QuizOmit
    quizResultQueue?: QuizResultQueueOmit
    quizResultQueueOutbox?: QuizResultQueueOutboxOmit
    reward?: RewardOmit
    scoreDistribution?: ScoreDistributionOmit
    user?: UserOmit
    userDiscord?: UserDiscordOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    Answer: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | ParticipantCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    Answer: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | QuestionCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    Participant: number
    ParticipantResult: number
    Question: number
    QuizResultQueue: number
    ScoreDistribution: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | QuizCountOutputTypeCountParticipantArgs
    ParticipantResult?: boolean | QuizCountOutputTypeCountParticipantResultArgs
    Question?: boolean | QuizCountOutputTypeCountQuestionArgs
    QuizResultQueue?: boolean | QuizCountOutputTypeCountQuizResultQueueArgs
    ScoreDistribution?: boolean | QuizCountOutputTypeCountScoreDistributionArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountParticipantResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantResultWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuizResultQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResultQueueWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountScoreDistributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreDistributionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Participant: number
    Question: number
    Quiz: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | UserCountOutputTypeCountParticipantArgs
    Question?: boolean | UserCountOutputTypeCountQuestionArgs
    Quiz?: boolean | UserCountOutputTypeCountQuizArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    selectedOption: number | null
  }

  export type AnswerSumAggregateOutputType = {
    selectedOption: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    participantId: string | null
    questionId: string | null
    isAnswerCorrect: boolean | null
    createdAt: Date | null
    selectedOption: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    participantId: string | null
    questionId: string | null
    isAnswerCorrect: boolean | null
    createdAt: Date | null
    selectedOption: number | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    participantId: number
    questionId: number
    isAnswerCorrect: number
    createdAt: number
    selectedOption: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    selectedOption?: true
  }

  export type AnswerSumAggregateInputType = {
    selectedOption?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    participantId?: true
    questionId?: true
    isAnswerCorrect?: true
    createdAt?: true
    selectedOption?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    participantId?: true
    questionId?: true
    isAnswerCorrect?: true
    createdAt?: true
    selectedOption?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    participantId?: true
    questionId?: true
    isAnswerCorrect?: true
    createdAt?: true
    selectedOption?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    participantId: string
    questionId: string
    isAnswerCorrect: boolean | null
    createdAt: Date
    selectedOption: number
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    questionId?: boolean
    isAnswerCorrect?: boolean
    createdAt?: boolean
    selectedOption?: boolean
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    AnswerOutbox?: boolean | Answer$AnswerOutboxArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    questionId?: boolean
    isAnswerCorrect?: boolean
    createdAt?: boolean
    selectedOption?: boolean
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    questionId?: boolean
    isAnswerCorrect?: boolean
    createdAt?: boolean
    selectedOption?: boolean
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    participantId?: boolean
    questionId?: boolean
    isAnswerCorrect?: boolean
    createdAt?: boolean
    selectedOption?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId" | "questionId" | "isAnswerCorrect" | "createdAt" | "selectedOption", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    AnswerOutbox?: boolean | Answer$AnswerOutboxArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      Participant: Prisma.$ParticipantPayload<ExtArgs>
      Question: Prisma.$QuestionPayload<ExtArgs>
      AnswerOutbox: Prisma.$AnswerOutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      participantId: string
      questionId: string
      isAnswerCorrect: boolean | null
      createdAt: Date
      selectedOption: number
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AnswerOutbox<T extends Answer$AnswerOutboxArgs<ExtArgs> = {}>(args?: Subset<T, Answer$AnswerOutboxArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly participantId: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly isAnswerCorrect: FieldRef<"Answer", 'Boolean'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
    readonly selectedOption: FieldRef<"Answer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.AnswerOutbox
   */
  export type Answer$AnswerOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    where?: AnswerOutboxWhereInput
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model AnswerOutbox
   */

  export type AggregateAnswerOutbox = {
    _count: AnswerOutboxCountAggregateOutputType | null
    _min: AnswerOutboxMinAggregateOutputType | null
    _max: AnswerOutboxMaxAggregateOutputType | null
  }

  export type AnswerOutboxMinAggregateOutputType = {
    id: string | null
    answerId: string | null
  }

  export type AnswerOutboxMaxAggregateOutputType = {
    id: string | null
    answerId: string | null
  }

  export type AnswerOutboxCountAggregateOutputType = {
    id: number
    answerId: number
    _all: number
  }


  export type AnswerOutboxMinAggregateInputType = {
    id?: true
    answerId?: true
  }

  export type AnswerOutboxMaxAggregateInputType = {
    id?: true
    answerId?: true
  }

  export type AnswerOutboxCountAggregateInputType = {
    id?: true
    answerId?: true
    _all?: true
  }

  export type AnswerOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnswerOutbox to aggregate.
     */
    where?: AnswerOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerOutboxes to fetch.
     */
    orderBy?: AnswerOutboxOrderByWithRelationInput | AnswerOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnswerOutboxes
    **/
    _count?: true | AnswerOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerOutboxMaxAggregateInputType
  }

  export type GetAnswerOutboxAggregateType<T extends AnswerOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswerOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswerOutbox[P]>
      : GetScalarType<T[P], AggregateAnswerOutbox[P]>
  }




  export type AnswerOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerOutboxWhereInput
    orderBy?: AnswerOutboxOrderByWithAggregationInput | AnswerOutboxOrderByWithAggregationInput[]
    by: AnswerOutboxScalarFieldEnum[] | AnswerOutboxScalarFieldEnum
    having?: AnswerOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerOutboxCountAggregateInputType | true
    _min?: AnswerOutboxMinAggregateInputType
    _max?: AnswerOutboxMaxAggregateInputType
  }

  export type AnswerOutboxGroupByOutputType = {
    id: string
    answerId: string
    _count: AnswerOutboxCountAggregateOutputType | null
    _min: AnswerOutboxMinAggregateOutputType | null
    _max: AnswerOutboxMaxAggregateOutputType | null
  }

  type GetAnswerOutboxGroupByPayload<T extends AnswerOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerOutboxGroupByOutputType[P]>
        }
      >
    >


  export type AnswerOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerId?: boolean
    Answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerOutbox"]>

  export type AnswerOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerId?: boolean
    Answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerOutbox"]>

  export type AnswerOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answerId?: boolean
    Answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answerOutbox"]>

  export type AnswerOutboxSelectScalar = {
    id?: boolean
    answerId?: boolean
  }

  export type AnswerOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "answerId", ExtArgs["result"]["answerOutbox"]>
  export type AnswerOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type AnswerOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }
  export type AnswerOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | AnswerDefaultArgs<ExtArgs>
  }

  export type $AnswerOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnswerOutbox"
    objects: {
      Answer: Prisma.$AnswerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      answerId: string
    }, ExtArgs["result"]["answerOutbox"]>
    composites: {}
  }

  type AnswerOutboxGetPayload<S extends boolean | null | undefined | AnswerOutboxDefaultArgs> = $Result.GetResult<Prisma.$AnswerOutboxPayload, S>

  type AnswerOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerOutboxCountAggregateInputType | true
    }

  export interface AnswerOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnswerOutbox'], meta: { name: 'AnswerOutbox' } }
    /**
     * Find zero or one AnswerOutbox that matches the filter.
     * @param {AnswerOutboxFindUniqueArgs} args - Arguments to find a AnswerOutbox
     * @example
     * // Get one AnswerOutbox
     * const answerOutbox = await prisma.answerOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerOutboxFindUniqueArgs>(args: SelectSubset<T, AnswerOutboxFindUniqueArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnswerOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerOutboxFindUniqueOrThrowArgs} args - Arguments to find a AnswerOutbox
     * @example
     * // Get one AnswerOutbox
     * const answerOutbox = await prisma.answerOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnswerOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerOutboxFindFirstArgs} args - Arguments to find a AnswerOutbox
     * @example
     * // Get one AnswerOutbox
     * const answerOutbox = await prisma.answerOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerOutboxFindFirstArgs>(args?: SelectSubset<T, AnswerOutboxFindFirstArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnswerOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerOutboxFindFirstOrThrowArgs} args - Arguments to find a AnswerOutbox
     * @example
     * // Get one AnswerOutbox
     * const answerOutbox = await prisma.answerOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnswerOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnswerOutboxes
     * const answerOutboxes = await prisma.answerOutbox.findMany()
     * 
     * // Get first 10 AnswerOutboxes
     * const answerOutboxes = await prisma.answerOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerOutboxWithIdOnly = await prisma.answerOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerOutboxFindManyArgs>(args?: SelectSubset<T, AnswerOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnswerOutbox.
     * @param {AnswerOutboxCreateArgs} args - Arguments to create a AnswerOutbox.
     * @example
     * // Create one AnswerOutbox
     * const AnswerOutbox = await prisma.answerOutbox.create({
     *   data: {
     *     // ... data to create a AnswerOutbox
     *   }
     * })
     * 
     */
    create<T extends AnswerOutboxCreateArgs>(args: SelectSubset<T, AnswerOutboxCreateArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnswerOutboxes.
     * @param {AnswerOutboxCreateManyArgs} args - Arguments to create many AnswerOutboxes.
     * @example
     * // Create many AnswerOutboxes
     * const answerOutbox = await prisma.answerOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerOutboxCreateManyArgs>(args?: SelectSubset<T, AnswerOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnswerOutboxes and returns the data saved in the database.
     * @param {AnswerOutboxCreateManyAndReturnArgs} args - Arguments to create many AnswerOutboxes.
     * @example
     * // Create many AnswerOutboxes
     * const answerOutbox = await prisma.answerOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnswerOutboxes and only return the `id`
     * const answerOutboxWithIdOnly = await prisma.answerOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnswerOutbox.
     * @param {AnswerOutboxDeleteArgs} args - Arguments to delete one AnswerOutbox.
     * @example
     * // Delete one AnswerOutbox
     * const AnswerOutbox = await prisma.answerOutbox.delete({
     *   where: {
     *     // ... filter to delete one AnswerOutbox
     *   }
     * })
     * 
     */
    delete<T extends AnswerOutboxDeleteArgs>(args: SelectSubset<T, AnswerOutboxDeleteArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnswerOutbox.
     * @param {AnswerOutboxUpdateArgs} args - Arguments to update one AnswerOutbox.
     * @example
     * // Update one AnswerOutbox
     * const answerOutbox = await prisma.answerOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerOutboxUpdateArgs>(args: SelectSubset<T, AnswerOutboxUpdateArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnswerOutboxes.
     * @param {AnswerOutboxDeleteManyArgs} args - Arguments to filter AnswerOutboxes to delete.
     * @example
     * // Delete a few AnswerOutboxes
     * const { count } = await prisma.answerOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerOutboxDeleteManyArgs>(args?: SelectSubset<T, AnswerOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnswerOutboxes
     * const answerOutbox = await prisma.answerOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerOutboxUpdateManyArgs>(args: SelectSubset<T, AnswerOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnswerOutboxes and returns the data updated in the database.
     * @param {AnswerOutboxUpdateManyAndReturnArgs} args - Arguments to update many AnswerOutboxes.
     * @example
     * // Update many AnswerOutboxes
     * const answerOutbox = await prisma.answerOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnswerOutboxes and only return the `id`
     * const answerOutboxWithIdOnly = await prisma.answerOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnswerOutbox.
     * @param {AnswerOutboxUpsertArgs} args - Arguments to update or create a AnswerOutbox.
     * @example
     * // Update or create a AnswerOutbox
     * const answerOutbox = await prisma.answerOutbox.upsert({
     *   create: {
     *     // ... data to create a AnswerOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnswerOutbox we want to update
     *   }
     * })
     */
    upsert<T extends AnswerOutboxUpsertArgs>(args: SelectSubset<T, AnswerOutboxUpsertArgs<ExtArgs>>): Prisma__AnswerOutboxClient<$Result.GetResult<Prisma.$AnswerOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnswerOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerOutboxCountArgs} args - Arguments to filter AnswerOutboxes to count.
     * @example
     * // Count the number of AnswerOutboxes
     * const count = await prisma.answerOutbox.count({
     *   where: {
     *     // ... the filter for the AnswerOutboxes we want to count
     *   }
     * })
    **/
    count<T extends AnswerOutboxCountArgs>(
      args?: Subset<T, AnswerOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnswerOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerOutboxAggregateArgs>(args: Subset<T, AnswerOutboxAggregateArgs>): Prisma.PrismaPromise<GetAnswerOutboxAggregateType<T>>

    /**
     * Group by AnswerOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerOutboxGroupByArgs} args - Group by arguments.
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
      T extends AnswerOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerOutboxGroupByArgs['orderBy'] }
        : { orderBy?: AnswerOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnswerOutbox model
   */
  readonly fields: AnswerOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnswerOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnswerOutbox model
   */
  interface AnswerOutboxFieldRefs {
    readonly id: FieldRef<"AnswerOutbox", 'String'>
    readonly answerId: FieldRef<"AnswerOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AnswerOutbox findUnique
   */
  export type AnswerOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AnswerOutbox to fetch.
     */
    where: AnswerOutboxWhereUniqueInput
  }

  /**
   * AnswerOutbox findUniqueOrThrow
   */
  export type AnswerOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AnswerOutbox to fetch.
     */
    where: AnswerOutboxWhereUniqueInput
  }

  /**
   * AnswerOutbox findFirst
   */
  export type AnswerOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AnswerOutbox to fetch.
     */
    where?: AnswerOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerOutboxes to fetch.
     */
    orderBy?: AnswerOutboxOrderByWithRelationInput | AnswerOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerOutboxes.
     */
    cursor?: AnswerOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerOutboxes.
     */
    distinct?: AnswerOutboxScalarFieldEnum | AnswerOutboxScalarFieldEnum[]
  }

  /**
   * AnswerOutbox findFirstOrThrow
   */
  export type AnswerOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AnswerOutbox to fetch.
     */
    where?: AnswerOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerOutboxes to fetch.
     */
    orderBy?: AnswerOutboxOrderByWithRelationInput | AnswerOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnswerOutboxes.
     */
    cursor?: AnswerOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnswerOutboxes.
     */
    distinct?: AnswerOutboxScalarFieldEnum | AnswerOutboxScalarFieldEnum[]
  }

  /**
   * AnswerOutbox findMany
   */
  export type AnswerOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * Filter, which AnswerOutboxes to fetch.
     */
    where?: AnswerOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnswerOutboxes to fetch.
     */
    orderBy?: AnswerOutboxOrderByWithRelationInput | AnswerOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnswerOutboxes.
     */
    cursor?: AnswerOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnswerOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnswerOutboxes.
     */
    skip?: number
    distinct?: AnswerOutboxScalarFieldEnum | AnswerOutboxScalarFieldEnum[]
  }

  /**
   * AnswerOutbox create
   */
  export type AnswerOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a AnswerOutbox.
     */
    data: XOR<AnswerOutboxCreateInput, AnswerOutboxUncheckedCreateInput>
  }

  /**
   * AnswerOutbox createMany
   */
  export type AnswerOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnswerOutboxes.
     */
    data: AnswerOutboxCreateManyInput | AnswerOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnswerOutbox createManyAndReturn
   */
  export type AnswerOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many AnswerOutboxes.
     */
    data: AnswerOutboxCreateManyInput | AnswerOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnswerOutbox update
   */
  export type AnswerOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a AnswerOutbox.
     */
    data: XOR<AnswerOutboxUpdateInput, AnswerOutboxUncheckedUpdateInput>
    /**
     * Choose, which AnswerOutbox to update.
     */
    where: AnswerOutboxWhereUniqueInput
  }

  /**
   * AnswerOutbox updateMany
   */
  export type AnswerOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnswerOutboxes.
     */
    data: XOR<AnswerOutboxUpdateManyMutationInput, AnswerOutboxUncheckedUpdateManyInput>
    /**
     * Filter which AnswerOutboxes to update
     */
    where?: AnswerOutboxWhereInput
    /**
     * Limit how many AnswerOutboxes to update.
     */
    limit?: number
  }

  /**
   * AnswerOutbox updateManyAndReturn
   */
  export type AnswerOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * The data used to update AnswerOutboxes.
     */
    data: XOR<AnswerOutboxUpdateManyMutationInput, AnswerOutboxUncheckedUpdateManyInput>
    /**
     * Filter which AnswerOutboxes to update
     */
    where?: AnswerOutboxWhereInput
    /**
     * Limit how many AnswerOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnswerOutbox upsert
   */
  export type AnswerOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the AnswerOutbox to update in case it exists.
     */
    where: AnswerOutboxWhereUniqueInput
    /**
     * In case the AnswerOutbox found by the `where` argument doesn't exist, create a new AnswerOutbox with this data.
     */
    create: XOR<AnswerOutboxCreateInput, AnswerOutboxUncheckedCreateInput>
    /**
     * In case the AnswerOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerOutboxUpdateInput, AnswerOutboxUncheckedUpdateInput>
  }

  /**
   * AnswerOutbox delete
   */
  export type AnswerOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
    /**
     * Filter which AnswerOutbox to delete.
     */
    where: AnswerOutboxWhereUniqueInput
  }

  /**
   * AnswerOutbox deleteMany
   */
  export type AnswerOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnswerOutboxes to delete
     */
    where?: AnswerOutboxWhereInput
    /**
     * Limit how many AnswerOutboxes to delete.
     */
    limit?: number
  }

  /**
   * AnswerOutbox without action
   */
  export type AnswerOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerOutbox
     */
    select?: AnswerOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnswerOutbox
     */
    omit?: AnswerOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerOutboxInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    joinedAt: Date | null
    isConnected: boolean | null
    isBanned: boolean | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    joinedAt: Date | null
    isConnected: boolean | null
    isBanned: boolean | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    joinedAt: number
    isConnected: number
    isBanned: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    joinedAt?: true
    isConnected?: true
    isBanned?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    joinedAt?: true
    isConnected?: true
    isBanned?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    joinedAt?: true
    isConnected?: true
    isBanned?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    userId: string
    quizId: string
    joinedAt: Date
    isConnected: boolean
    isBanned: boolean
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    joinedAt?: boolean
    isConnected?: boolean
    isBanned?: boolean
    Answer?: boolean | Participant$AnswerArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    ParticipantResult?: boolean | Participant$ParticipantResultArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    joinedAt?: boolean
    isConnected?: boolean
    isBanned?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    joinedAt?: boolean
    isConnected?: boolean
    isBanned?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    joinedAt?: boolean
    isConnected?: boolean
    isBanned?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizId" | "joinedAt" | "isConnected" | "isBanned", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | Participant$AnswerArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    ParticipantResult?: boolean | Participant$ParticipantResultArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      Answer: Prisma.$AnswerPayload<ExtArgs>[]
      Quiz: Prisma.$QuizPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      ParticipantResult: Prisma.$ParticipantResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizId: string
      joinedAt: Date
      isConnected: boolean
      isBanned: boolean
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Answer<T extends Participant$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, Participant$AnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ParticipantResult<T extends Participant$ParticipantResultArgs<ExtArgs> = {}>(args?: Subset<T, Participant$ParticipantResultArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'String'>
    readonly userId: FieldRef<"Participant", 'String'>
    readonly quizId: FieldRef<"Participant", 'String'>
    readonly joinedAt: FieldRef<"Participant", 'DateTime'>
    readonly isConnected: FieldRef<"Participant", 'Boolean'>
    readonly isBanned: FieldRef<"Participant", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.Answer
   */
  export type Participant$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Participant.ParticipantResult
   */
  export type Participant$ParticipantResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    where?: ParticipantResultWhereInput
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantResult
   */

  export type AggregateParticipantResult = {
    _count: ParticipantResultCountAggregateOutputType | null
    _avg: ParticipantResultAvgAggregateOutputType | null
    _sum: ParticipantResultSumAggregateOutputType | null
    _min: ParticipantResultMinAggregateOutputType | null
    _max: ParticipantResultMaxAggregateOutputType | null
  }

  export type ParticipantResultAvgAggregateOutputType = {
    score: number | null
    rank: number | null
  }

  export type ParticipantResultSumAggregateOutputType = {
    score: number | null
    rank: number | null
  }

  export type ParticipantResultMinAggregateOutputType = {
    id: string | null
    participantId: string | null
    quizId: string | null
    score: number | null
    rank: number | null
    createdAt: Date | null
  }

  export type ParticipantResultMaxAggregateOutputType = {
    id: string | null
    participantId: string | null
    quizId: string | null
    score: number | null
    rank: number | null
    createdAt: Date | null
  }

  export type ParticipantResultCountAggregateOutputType = {
    id: number
    participantId: number
    quizId: number
    score: number
    rank: number
    createdAt: number
    _all: number
  }


  export type ParticipantResultAvgAggregateInputType = {
    score?: true
    rank?: true
  }

  export type ParticipantResultSumAggregateInputType = {
    score?: true
    rank?: true
  }

  export type ParticipantResultMinAggregateInputType = {
    id?: true
    participantId?: true
    quizId?: true
    score?: true
    rank?: true
    createdAt?: true
  }

  export type ParticipantResultMaxAggregateInputType = {
    id?: true
    participantId?: true
    quizId?: true
    score?: true
    rank?: true
    createdAt?: true
  }

  export type ParticipantResultCountAggregateInputType = {
    id?: true
    participantId?: true
    quizId?: true
    score?: true
    rank?: true
    createdAt?: true
    _all?: true
  }

  export type ParticipantResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantResult to aggregate.
     */
    where?: ParticipantResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantResults to fetch.
     */
    orderBy?: ParticipantResultOrderByWithRelationInput | ParticipantResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantResults
    **/
    _count?: true | ParticipantResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantResultMaxAggregateInputType
  }

  export type GetParticipantResultAggregateType<T extends ParticipantResultAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantResult[P]>
      : GetScalarType<T[P], AggregateParticipantResult[P]>
  }




  export type ParticipantResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantResultWhereInput
    orderBy?: ParticipantResultOrderByWithAggregationInput | ParticipantResultOrderByWithAggregationInput[]
    by: ParticipantResultScalarFieldEnum[] | ParticipantResultScalarFieldEnum
    having?: ParticipantResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantResultCountAggregateInputType | true
    _avg?: ParticipantResultAvgAggregateInputType
    _sum?: ParticipantResultSumAggregateInputType
    _min?: ParticipantResultMinAggregateInputType
    _max?: ParticipantResultMaxAggregateInputType
  }

  export type ParticipantResultGroupByOutputType = {
    id: string
    participantId: string
    quizId: string
    score: number
    rank: number
    createdAt: Date
    _count: ParticipantResultCountAggregateOutputType | null
    _avg: ParticipantResultAvgAggregateOutputType | null
    _sum: ParticipantResultSumAggregateOutputType | null
    _min: ParticipantResultMinAggregateOutputType | null
    _max: ParticipantResultMaxAggregateOutputType | null
  }

  type GetParticipantResultGroupByPayload<T extends ParticipantResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantResultGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantResultGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    quizId?: boolean
    score?: boolean
    rank?: boolean
    createdAt?: boolean
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantResult"]>

  export type ParticipantResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    quizId?: boolean
    score?: boolean
    rank?: boolean
    createdAt?: boolean
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantResult"]>

  export type ParticipantResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    quizId?: boolean
    score?: boolean
    rank?: boolean
    createdAt?: boolean
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantResult"]>

  export type ParticipantResultSelectScalar = {
    id?: boolean
    participantId?: boolean
    quizId?: boolean
    score?: boolean
    rank?: boolean
    createdAt?: boolean
  }

  export type ParticipantResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId" | "quizId" | "score" | "rank" | "createdAt", ExtArgs["result"]["participantResult"]>
  export type ParticipantResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type ParticipantResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type ParticipantResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $ParticipantResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantResult"
    objects: {
      Participant: Prisma.$ParticipantPayload<ExtArgs>
      Quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      participantId: string
      quizId: string
      score: number
      rank: number
      createdAt: Date
    }, ExtArgs["result"]["participantResult"]>
    composites: {}
  }

  type ParticipantResultGetPayload<S extends boolean | null | undefined | ParticipantResultDefaultArgs> = $Result.GetResult<Prisma.$ParticipantResultPayload, S>

  type ParticipantResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantResultCountAggregateInputType | true
    }

  export interface ParticipantResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantResult'], meta: { name: 'ParticipantResult' } }
    /**
     * Find zero or one ParticipantResult that matches the filter.
     * @param {ParticipantResultFindUniqueArgs} args - Arguments to find a ParticipantResult
     * @example
     * // Get one ParticipantResult
     * const participantResult = await prisma.participantResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantResultFindUniqueArgs>(args: SelectSubset<T, ParticipantResultFindUniqueArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantResultFindUniqueOrThrowArgs} args - Arguments to find a ParticipantResult
     * @example
     * // Get one ParticipantResult
     * const participantResult = await prisma.participantResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResultFindFirstArgs} args - Arguments to find a ParticipantResult
     * @example
     * // Get one ParticipantResult
     * const participantResult = await prisma.participantResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantResultFindFirstArgs>(args?: SelectSubset<T, ParticipantResultFindFirstArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResultFindFirstOrThrowArgs} args - Arguments to find a ParticipantResult
     * @example
     * // Get one ParticipantResult
     * const participantResult = await prisma.participantResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantResults
     * const participantResults = await prisma.participantResult.findMany()
     * 
     * // Get first 10 ParticipantResults
     * const participantResults = await prisma.participantResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantResultWithIdOnly = await prisma.participantResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantResultFindManyArgs>(args?: SelectSubset<T, ParticipantResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantResult.
     * @param {ParticipantResultCreateArgs} args - Arguments to create a ParticipantResult.
     * @example
     * // Create one ParticipantResult
     * const ParticipantResult = await prisma.participantResult.create({
     *   data: {
     *     // ... data to create a ParticipantResult
     *   }
     * })
     * 
     */
    create<T extends ParticipantResultCreateArgs>(args: SelectSubset<T, ParticipantResultCreateArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantResults.
     * @param {ParticipantResultCreateManyArgs} args - Arguments to create many ParticipantResults.
     * @example
     * // Create many ParticipantResults
     * const participantResult = await prisma.participantResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantResultCreateManyArgs>(args?: SelectSubset<T, ParticipantResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantResults and returns the data saved in the database.
     * @param {ParticipantResultCreateManyAndReturnArgs} args - Arguments to create many ParticipantResults.
     * @example
     * // Create many ParticipantResults
     * const participantResult = await prisma.participantResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantResults and only return the `id`
     * const participantResultWithIdOnly = await prisma.participantResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantResult.
     * @param {ParticipantResultDeleteArgs} args - Arguments to delete one ParticipantResult.
     * @example
     * // Delete one ParticipantResult
     * const ParticipantResult = await prisma.participantResult.delete({
     *   where: {
     *     // ... filter to delete one ParticipantResult
     *   }
     * })
     * 
     */
    delete<T extends ParticipantResultDeleteArgs>(args: SelectSubset<T, ParticipantResultDeleteArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantResult.
     * @param {ParticipantResultUpdateArgs} args - Arguments to update one ParticipantResult.
     * @example
     * // Update one ParticipantResult
     * const participantResult = await prisma.participantResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantResultUpdateArgs>(args: SelectSubset<T, ParticipantResultUpdateArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantResults.
     * @param {ParticipantResultDeleteManyArgs} args - Arguments to filter ParticipantResults to delete.
     * @example
     * // Delete a few ParticipantResults
     * const { count } = await prisma.participantResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantResultDeleteManyArgs>(args?: SelectSubset<T, ParticipantResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantResults
     * const participantResult = await prisma.participantResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantResultUpdateManyArgs>(args: SelectSubset<T, ParticipantResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantResults and returns the data updated in the database.
     * @param {ParticipantResultUpdateManyAndReturnArgs} args - Arguments to update many ParticipantResults.
     * @example
     * // Update many ParticipantResults
     * const participantResult = await prisma.participantResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantResults and only return the `id`
     * const participantResultWithIdOnly = await prisma.participantResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantResult.
     * @param {ParticipantResultUpsertArgs} args - Arguments to update or create a ParticipantResult.
     * @example
     * // Update or create a ParticipantResult
     * const participantResult = await prisma.participantResult.upsert({
     *   create: {
     *     // ... data to create a ParticipantResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantResult we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantResultUpsertArgs>(args: SelectSubset<T, ParticipantResultUpsertArgs<ExtArgs>>): Prisma__ParticipantResultClient<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResultCountArgs} args - Arguments to filter ParticipantResults to count.
     * @example
     * // Count the number of ParticipantResults
     * const count = await prisma.participantResult.count({
     *   where: {
     *     // ... the filter for the ParticipantResults we want to count
     *   }
     * })
    **/
    count<T extends ParticipantResultCountArgs>(
      args?: Subset<T, ParticipantResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantResultAggregateArgs>(args: Subset<T, ParticipantResultAggregateArgs>): Prisma.PrismaPromise<GetParticipantResultAggregateType<T>>

    /**
     * Group by ParticipantResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantResultGroupByArgs} args - Group by arguments.
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
      T extends ParticipantResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantResultGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantResult model
   */
  readonly fields: ParticipantResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParticipantResult model
   */
  interface ParticipantResultFieldRefs {
    readonly id: FieldRef<"ParticipantResult", 'String'>
    readonly participantId: FieldRef<"ParticipantResult", 'String'>
    readonly quizId: FieldRef<"ParticipantResult", 'String'>
    readonly score: FieldRef<"ParticipantResult", 'Int'>
    readonly rank: FieldRef<"ParticipantResult", 'Int'>
    readonly createdAt: FieldRef<"ParticipantResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantResult findUnique
   */
  export type ParticipantResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResult to fetch.
     */
    where: ParticipantResultWhereUniqueInput
  }

  /**
   * ParticipantResult findUniqueOrThrow
   */
  export type ParticipantResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResult to fetch.
     */
    where: ParticipantResultWhereUniqueInput
  }

  /**
   * ParticipantResult findFirst
   */
  export type ParticipantResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResult to fetch.
     */
    where?: ParticipantResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantResults to fetch.
     */
    orderBy?: ParticipantResultOrderByWithRelationInput | ParticipantResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantResults.
     */
    cursor?: ParticipantResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantResults.
     */
    distinct?: ParticipantResultScalarFieldEnum | ParticipantResultScalarFieldEnum[]
  }

  /**
   * ParticipantResult findFirstOrThrow
   */
  export type ParticipantResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResult to fetch.
     */
    where?: ParticipantResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantResults to fetch.
     */
    orderBy?: ParticipantResultOrderByWithRelationInput | ParticipantResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantResults.
     */
    cursor?: ParticipantResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantResults.
     */
    distinct?: ParticipantResultScalarFieldEnum | ParticipantResultScalarFieldEnum[]
  }

  /**
   * ParticipantResult findMany
   */
  export type ParticipantResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantResults to fetch.
     */
    where?: ParticipantResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantResults to fetch.
     */
    orderBy?: ParticipantResultOrderByWithRelationInput | ParticipantResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantResults.
     */
    cursor?: ParticipantResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantResults.
     */
    skip?: number
    distinct?: ParticipantResultScalarFieldEnum | ParticipantResultScalarFieldEnum[]
  }

  /**
   * ParticipantResult create
   */
  export type ParticipantResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipantResult.
     */
    data: XOR<ParticipantResultCreateInput, ParticipantResultUncheckedCreateInput>
  }

  /**
   * ParticipantResult createMany
   */
  export type ParticipantResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantResults.
     */
    data: ParticipantResultCreateManyInput | ParticipantResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantResult createManyAndReturn
   */
  export type ParticipantResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantResults.
     */
    data: ParticipantResultCreateManyInput | ParticipantResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantResult update
   */
  export type ParticipantResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipantResult.
     */
    data: XOR<ParticipantResultUpdateInput, ParticipantResultUncheckedUpdateInput>
    /**
     * Choose, which ParticipantResult to update.
     */
    where: ParticipantResultWhereUniqueInput
  }

  /**
   * ParticipantResult updateMany
   */
  export type ParticipantResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantResults.
     */
    data: XOR<ParticipantResultUpdateManyMutationInput, ParticipantResultUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantResults to update
     */
    where?: ParticipantResultWhereInput
    /**
     * Limit how many ParticipantResults to update.
     */
    limit?: number
  }

  /**
   * ParticipantResult updateManyAndReturn
   */
  export type ParticipantResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantResults.
     */
    data: XOR<ParticipantResultUpdateManyMutationInput, ParticipantResultUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantResults to update
     */
    where?: ParticipantResultWhereInput
    /**
     * Limit how many ParticipantResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantResult upsert
   */
  export type ParticipantResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipantResult to update in case it exists.
     */
    where: ParticipantResultWhereUniqueInput
    /**
     * In case the ParticipantResult found by the `where` argument doesn't exist, create a new ParticipantResult with this data.
     */
    create: XOR<ParticipantResultCreateInput, ParticipantResultUncheckedCreateInput>
    /**
     * In case the ParticipantResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantResultUpdateInput, ParticipantResultUncheckedUpdateInput>
  }

  /**
   * ParticipantResult delete
   */
  export type ParticipantResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    /**
     * Filter which ParticipantResult to delete.
     */
    where: ParticipantResultWhereUniqueInput
  }

  /**
   * ParticipantResult deleteMany
   */
  export type ParticipantResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantResults to delete
     */
    where?: ParticipantResultWhereInput
    /**
     * Limit how many ParticipantResults to delete.
     */
    limit?: number
  }

  /**
   * ParticipantResult without action
   */
  export type ParticipantResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    questionIndex: number | null
    correctOption: number | null
    CorrectAnswerPercentage: number | null
  }

  export type QuestionSumAggregateOutputType = {
    questionIndex: number | null
    correctOption: number | null
    CorrectAnswerPercentage: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    questionText: string | null
    questionIndex: number | null
    quizId: string | null
    creatorId: string | null
    correctOption: number | null
    CorrectAnswerPercentage: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    questionText: string | null
    questionIndex: number | null
    quizId: string | null
    creatorId: string | null
    correctOption: number | null
    CorrectAnswerPercentage: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    questionText: number
    questionIndex: number
    options: number
    quizId: number
    creatorId: number
    correctOption: number
    CorrectAnswerPercentage: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    questionIndex?: true
    correctOption?: true
    CorrectAnswerPercentage?: true
  }

  export type QuestionSumAggregateInputType = {
    questionIndex?: true
    correctOption?: true
    CorrectAnswerPercentage?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    questionText?: true
    questionIndex?: true
    quizId?: true
    creatorId?: true
    correctOption?: true
    CorrectAnswerPercentage?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    questionText?: true
    questionIndex?: true
    quizId?: true
    creatorId?: true
    correctOption?: true
    CorrectAnswerPercentage?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    questionText?: true
    questionIndex?: true
    options?: true
    quizId?: true
    creatorId?: true
    correctOption?: true
    CorrectAnswerPercentage?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    questionText: string
    questionIndex: number
    options: JsonValue
    quizId: string
    creatorId: string
    correctOption: number
    CorrectAnswerPercentage: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    questionIndex?: boolean
    options?: boolean
    quizId?: boolean
    creatorId?: boolean
    correctOption?: boolean
    CorrectAnswerPercentage?: boolean
    Answer?: boolean | Question$AnswerArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    questionIndex?: boolean
    options?: boolean
    quizId?: boolean
    creatorId?: boolean
    correctOption?: boolean
    CorrectAnswerPercentage?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionText?: boolean
    questionIndex?: boolean
    options?: boolean
    quizId?: boolean
    creatorId?: boolean
    correctOption?: boolean
    CorrectAnswerPercentage?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    questionText?: boolean
    questionIndex?: boolean
    options?: boolean
    quizId?: boolean
    creatorId?: boolean
    correctOption?: boolean
    CorrectAnswerPercentage?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionText" | "questionIndex" | "options" | "quizId" | "creatorId" | "correctOption" | "CorrectAnswerPercentage", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | Question$AnswerArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      Answer: Prisma.$AnswerPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
      Quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionText: string
      questionIndex: number
      options: Prisma.JsonValue
      quizId: string
      creatorId: string
      correctOption: number
      CorrectAnswerPercentage: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Answer<T extends Question$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, Question$AnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly questionText: FieldRef<"Question", 'String'>
    readonly questionIndex: FieldRef<"Question", 'Int'>
    readonly options: FieldRef<"Question", 'Json'>
    readonly quizId: FieldRef<"Question", 'String'>
    readonly creatorId: FieldRef<"Question", 'String'>
    readonly correctOption: FieldRef<"Question", 'Int'>
    readonly CorrectAnswerPercentage: FieldRef<"Question", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.Answer
   */
  export type Question$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    currentQuestionIndex: number | null
    timePerQuestion: number | null
    maxParticipants: number | null
    totalParticipants: number | null
    avgScore: number | null
    lowestScore: number | null
  }

  export type QuizSumAggregateOutputType = {
    currentQuestionIndex: number | null
    timePerQuestion: number | null
    maxParticipants: number | null
    totalParticipants: number | null
    avgScore: number | null
    lowestScore: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    title: string | null
    description: string | null
    status: $Enums.QuizStatus | null
    currentQuestionIndex: number | null
    timePerQuestion: number | null
    createdAt: Date | null
    maxParticipants: number | null
    totalParticipants: number | null
    isResultCalculated: boolean | null
    avgScore: number | null
    lowestScore: number | null
    resultSentViaMail: boolean | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    title: string | null
    description: string | null
    status: $Enums.QuizStatus | null
    currentQuestionIndex: number | null
    timePerQuestion: number | null
    createdAt: Date | null
    maxParticipants: number | null
    totalParticipants: number | null
    isResultCalculated: boolean | null
    avgScore: number | null
    lowestScore: number | null
    resultSentViaMail: boolean | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    creatorId: number
    title: number
    description: number
    status: number
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt: number
    maxParticipants: number
    totalParticipants: number
    isResultCalculated: number
    avgScore: number
    lowestScore: number
    resultSentViaMail: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    currentQuestionIndex?: true
    timePerQuestion?: true
    maxParticipants?: true
    totalParticipants?: true
    avgScore?: true
    lowestScore?: true
  }

  export type QuizSumAggregateInputType = {
    currentQuestionIndex?: true
    timePerQuestion?: true
    maxParticipants?: true
    totalParticipants?: true
    avgScore?: true
    lowestScore?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    creatorId?: true
    title?: true
    description?: true
    status?: true
    currentQuestionIndex?: true
    timePerQuestion?: true
    createdAt?: true
    maxParticipants?: true
    totalParticipants?: true
    isResultCalculated?: true
    avgScore?: true
    lowestScore?: true
    resultSentViaMail?: true
    startedAt?: true
    endedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    creatorId?: true
    title?: true
    description?: true
    status?: true
    currentQuestionIndex?: true
    timePerQuestion?: true
    createdAt?: true
    maxParticipants?: true
    totalParticipants?: true
    isResultCalculated?: true
    avgScore?: true
    lowestScore?: true
    resultSentViaMail?: true
    startedAt?: true
    endedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    creatorId?: true
    title?: true
    description?: true
    status?: true
    currentQuestionIndex?: true
    timePerQuestion?: true
    createdAt?: true
    maxParticipants?: true
    totalParticipants?: true
    isResultCalculated?: true
    avgScore?: true
    lowestScore?: true
    resultSentViaMail?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    creatorId: string
    title: string
    description: string | null
    status: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt: Date
    maxParticipants: number
    totalParticipants: number
    isResultCalculated: boolean
    avgScore: number
    lowestScore: number
    resultSentViaMail: boolean
    startedAt: Date
    endedAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    currentQuestionIndex?: boolean
    timePerQuestion?: boolean
    createdAt?: boolean
    maxParticipants?: boolean
    totalParticipants?: boolean
    isResultCalculated?: boolean
    avgScore?: boolean
    lowestScore?: boolean
    resultSentViaMail?: boolean
    startedAt?: boolean
    endedAt?: boolean
    Participant?: boolean | Quiz$ParticipantArgs<ExtArgs>
    ParticipantResult?: boolean | Quiz$ParticipantResultArgs<ExtArgs>
    Question?: boolean | Quiz$QuestionArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    QuizResultQueue?: boolean | Quiz$QuizResultQueueArgs<ExtArgs>
    Reward?: boolean | Quiz$RewardArgs<ExtArgs>
    ScoreDistribution?: boolean | Quiz$ScoreDistributionArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    currentQuestionIndex?: boolean
    timePerQuestion?: boolean
    createdAt?: boolean
    maxParticipants?: boolean
    totalParticipants?: boolean
    isResultCalculated?: boolean
    avgScore?: boolean
    lowestScore?: boolean
    resultSentViaMail?: boolean
    startedAt?: boolean
    endedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    currentQuestionIndex?: boolean
    timePerQuestion?: boolean
    createdAt?: boolean
    maxParticipants?: boolean
    totalParticipants?: boolean
    isResultCalculated?: boolean
    avgScore?: boolean
    lowestScore?: boolean
    resultSentViaMail?: boolean
    startedAt?: boolean
    endedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    creatorId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    currentQuestionIndex?: boolean
    timePerQuestion?: boolean
    createdAt?: boolean
    maxParticipants?: boolean
    totalParticipants?: boolean
    isResultCalculated?: boolean
    avgScore?: boolean
    lowestScore?: boolean
    resultSentViaMail?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "title" | "description" | "status" | "currentQuestionIndex" | "timePerQuestion" | "createdAt" | "maxParticipants" | "totalParticipants" | "isResultCalculated" | "avgScore" | "lowestScore" | "resultSentViaMail" | "startedAt" | "endedAt", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | Quiz$ParticipantArgs<ExtArgs>
    ParticipantResult?: boolean | Quiz$ParticipantResultArgs<ExtArgs>
    Question?: boolean | Quiz$QuestionArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    QuizResultQueue?: boolean | Quiz$QuizResultQueueArgs<ExtArgs>
    Reward?: boolean | Quiz$RewardArgs<ExtArgs>
    ScoreDistribution?: boolean | Quiz$ScoreDistributionArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      Participant: Prisma.$ParticipantPayload<ExtArgs>[]
      ParticipantResult: Prisma.$ParticipantResultPayload<ExtArgs>[]
      Question: Prisma.$QuestionPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
      QuizResultQueue: Prisma.$QuizResultQueuePayload<ExtArgs>[]
      Reward: Prisma.$RewardPayload<ExtArgs> | null
      ScoreDistribution: Prisma.$ScoreDistributionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      title: string
      description: string | null
      status: $Enums.QuizStatus
      currentQuestionIndex: number
      timePerQuestion: number
      createdAt: Date
      maxParticipants: number
      totalParticipants: number
      isResultCalculated: boolean
      avgScore: number
      lowestScore: number
      resultSentViaMail: boolean
      startedAt: Date
      endedAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Participant<T extends Quiz$ParticipantArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$ParticipantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParticipantResult<T extends Quiz$ParticipantResultArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$ParticipantResultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Question<T extends Quiz$QuestionArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$QuestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    QuizResultQueue<T extends Quiz$QuizResultQueueArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$QuizResultQueueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reward<T extends Quiz$RewardArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$RewardArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ScoreDistribution<T extends Quiz$ScoreDistributionArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$ScoreDistributionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly creatorId: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly description: FieldRef<"Quiz", 'String'>
    readonly status: FieldRef<"Quiz", 'QuizStatus'>
    readonly currentQuestionIndex: FieldRef<"Quiz", 'Int'>
    readonly timePerQuestion: FieldRef<"Quiz", 'Int'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly maxParticipants: FieldRef<"Quiz", 'Int'>
    readonly totalParticipants: FieldRef<"Quiz", 'Int'>
    readonly isResultCalculated: FieldRef<"Quiz", 'Boolean'>
    readonly avgScore: FieldRef<"Quiz", 'Int'>
    readonly lowestScore: FieldRef<"Quiz", 'Int'>
    readonly resultSentViaMail: FieldRef<"Quiz", 'Boolean'>
    readonly startedAt: FieldRef<"Quiz", 'DateTime'>
    readonly endedAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.Participant
   */
  export type Quiz$ParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Quiz.ParticipantResult
   */
  export type Quiz$ParticipantResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantResult
     */
    select?: ParticipantResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantResult
     */
    omit?: ParticipantResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantResultInclude<ExtArgs> | null
    where?: ParticipantResultWhereInput
    orderBy?: ParticipantResultOrderByWithRelationInput | ParticipantResultOrderByWithRelationInput[]
    cursor?: ParticipantResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantResultScalarFieldEnum | ParticipantResultScalarFieldEnum[]
  }

  /**
   * Quiz.Question
   */
  export type Quiz$QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz.QuizResultQueue
   */
  export type Quiz$QuizResultQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    where?: QuizResultQueueWhereInput
    orderBy?: QuizResultQueueOrderByWithRelationInput | QuizResultQueueOrderByWithRelationInput[]
    cursor?: QuizResultQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizResultQueueScalarFieldEnum | QuizResultQueueScalarFieldEnum[]
  }

  /**
   * Quiz.Reward
   */
  export type Quiz$RewardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    where?: RewardWhereInput
  }

  /**
   * Quiz.ScoreDistribution
   */
  export type Quiz$ScoreDistributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    where?: ScoreDistributionWhereInput
    orderBy?: ScoreDistributionOrderByWithRelationInput | ScoreDistributionOrderByWithRelationInput[]
    cursor?: ScoreDistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreDistributionScalarFieldEnum | ScoreDistributionScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QuizResultQueue
   */

  export type AggregateQuizResultQueue = {
    _count: QuizResultQueueCountAggregateOutputType | null
    _min: QuizResultQueueMinAggregateOutputType | null
    _max: QuizResultQueueMaxAggregateOutputType | null
  }

  export type QuizResultQueueMinAggregateOutputType = {
    id: string | null
    quizId: string | null
  }

  export type QuizResultQueueMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
  }

  export type QuizResultQueueCountAggregateOutputType = {
    id: number
    quizId: number
    _all: number
  }


  export type QuizResultQueueMinAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type QuizResultQueueMaxAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type QuizResultQueueCountAggregateInputType = {
    id?: true
    quizId?: true
    _all?: true
  }

  export type QuizResultQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResultQueue to aggregate.
     */
    where?: QuizResultQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResultQueues to fetch.
     */
    orderBy?: QuizResultQueueOrderByWithRelationInput | QuizResultQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizResultQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResultQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResultQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizResultQueues
    **/
    _count?: true | QuizResultQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizResultQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizResultQueueMaxAggregateInputType
  }

  export type GetQuizResultQueueAggregateType<T extends QuizResultQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizResultQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizResultQueue[P]>
      : GetScalarType<T[P], AggregateQuizResultQueue[P]>
  }




  export type QuizResultQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResultQueueWhereInput
    orderBy?: QuizResultQueueOrderByWithAggregationInput | QuizResultQueueOrderByWithAggregationInput[]
    by: QuizResultQueueScalarFieldEnum[] | QuizResultQueueScalarFieldEnum
    having?: QuizResultQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizResultQueueCountAggregateInputType | true
    _min?: QuizResultQueueMinAggregateInputType
    _max?: QuizResultQueueMaxAggregateInputType
  }

  export type QuizResultQueueGroupByOutputType = {
    id: string
    quizId: string
    _count: QuizResultQueueCountAggregateOutputType | null
    _min: QuizResultQueueMinAggregateOutputType | null
    _max: QuizResultQueueMaxAggregateOutputType | null
  }

  type GetQuizResultQueueGroupByPayload<T extends QuizResultQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizResultQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizResultQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizResultQueueGroupByOutputType[P]>
            : GetScalarType<T[P], QuizResultQueueGroupByOutputType[P]>
        }
      >
    >


  export type QuizResultQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    QuizResultQueueOutbox?: boolean | QuizResultQueue$QuizResultQueueOutboxArgs<ExtArgs>
  }, ExtArgs["result"]["quizResultQueue"]>

  export type QuizResultQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResultQueue"]>

  export type QuizResultQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResultQueue"]>

  export type QuizResultQueueSelectScalar = {
    id?: boolean
    quizId?: boolean
  }

  export type QuizResultQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId", ExtArgs["result"]["quizResultQueue"]>
  export type QuizResultQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
    QuizResultQueueOutbox?: boolean | QuizResultQueue$QuizResultQueueOutboxArgs<ExtArgs>
  }
  export type QuizResultQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizResultQueueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizResultQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizResultQueue"
    objects: {
      Quiz: Prisma.$QuizPayload<ExtArgs>
      QuizResultQueueOutbox: Prisma.$QuizResultQueueOutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
    }, ExtArgs["result"]["quizResultQueue"]>
    composites: {}
  }

  type QuizResultQueueGetPayload<S extends boolean | null | undefined | QuizResultQueueDefaultArgs> = $Result.GetResult<Prisma.$QuizResultQueuePayload, S>

  type QuizResultQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizResultQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizResultQueueCountAggregateInputType | true
    }

  export interface QuizResultQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizResultQueue'], meta: { name: 'QuizResultQueue' } }
    /**
     * Find zero or one QuizResultQueue that matches the filter.
     * @param {QuizResultQueueFindUniqueArgs} args - Arguments to find a QuizResultQueue
     * @example
     * // Get one QuizResultQueue
     * const quizResultQueue = await prisma.quizResultQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizResultQueueFindUniqueArgs>(args: SelectSubset<T, QuizResultQueueFindUniqueArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizResultQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizResultQueueFindUniqueOrThrowArgs} args - Arguments to find a QuizResultQueue
     * @example
     * // Get one QuizResultQueue
     * const quizResultQueue = await prisma.quizResultQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizResultQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizResultQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResultQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueFindFirstArgs} args - Arguments to find a QuizResultQueue
     * @example
     * // Get one QuizResultQueue
     * const quizResultQueue = await prisma.quizResultQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizResultQueueFindFirstArgs>(args?: SelectSubset<T, QuizResultQueueFindFirstArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResultQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueFindFirstOrThrowArgs} args - Arguments to find a QuizResultQueue
     * @example
     * // Get one QuizResultQueue
     * const quizResultQueue = await prisma.quizResultQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizResultQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizResultQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizResultQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizResultQueues
     * const quizResultQueues = await prisma.quizResultQueue.findMany()
     * 
     * // Get first 10 QuizResultQueues
     * const quizResultQueues = await prisma.quizResultQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizResultQueueWithIdOnly = await prisma.quizResultQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizResultQueueFindManyArgs>(args?: SelectSubset<T, QuizResultQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizResultQueue.
     * @param {QuizResultQueueCreateArgs} args - Arguments to create a QuizResultQueue.
     * @example
     * // Create one QuizResultQueue
     * const QuizResultQueue = await prisma.quizResultQueue.create({
     *   data: {
     *     // ... data to create a QuizResultQueue
     *   }
     * })
     * 
     */
    create<T extends QuizResultQueueCreateArgs>(args: SelectSubset<T, QuizResultQueueCreateArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizResultQueues.
     * @param {QuizResultQueueCreateManyArgs} args - Arguments to create many QuizResultQueues.
     * @example
     * // Create many QuizResultQueues
     * const quizResultQueue = await prisma.quizResultQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizResultQueueCreateManyArgs>(args?: SelectSubset<T, QuizResultQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizResultQueues and returns the data saved in the database.
     * @param {QuizResultQueueCreateManyAndReturnArgs} args - Arguments to create many QuizResultQueues.
     * @example
     * // Create many QuizResultQueues
     * const quizResultQueue = await prisma.quizResultQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizResultQueues and only return the `id`
     * const quizResultQueueWithIdOnly = await prisma.quizResultQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizResultQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizResultQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizResultQueue.
     * @param {QuizResultQueueDeleteArgs} args - Arguments to delete one QuizResultQueue.
     * @example
     * // Delete one QuizResultQueue
     * const QuizResultQueue = await prisma.quizResultQueue.delete({
     *   where: {
     *     // ... filter to delete one QuizResultQueue
     *   }
     * })
     * 
     */
    delete<T extends QuizResultQueueDeleteArgs>(args: SelectSubset<T, QuizResultQueueDeleteArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizResultQueue.
     * @param {QuizResultQueueUpdateArgs} args - Arguments to update one QuizResultQueue.
     * @example
     * // Update one QuizResultQueue
     * const quizResultQueue = await prisma.quizResultQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizResultQueueUpdateArgs>(args: SelectSubset<T, QuizResultQueueUpdateArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizResultQueues.
     * @param {QuizResultQueueDeleteManyArgs} args - Arguments to filter QuizResultQueues to delete.
     * @example
     * // Delete a few QuizResultQueues
     * const { count } = await prisma.quizResultQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizResultQueueDeleteManyArgs>(args?: SelectSubset<T, QuizResultQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResultQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizResultQueues
     * const quizResultQueue = await prisma.quizResultQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizResultQueueUpdateManyArgs>(args: SelectSubset<T, QuizResultQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResultQueues and returns the data updated in the database.
     * @param {QuizResultQueueUpdateManyAndReturnArgs} args - Arguments to update many QuizResultQueues.
     * @example
     * // Update many QuizResultQueues
     * const quizResultQueue = await prisma.quizResultQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizResultQueues and only return the `id`
     * const quizResultQueueWithIdOnly = await prisma.quizResultQueue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizResultQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizResultQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizResultQueue.
     * @param {QuizResultQueueUpsertArgs} args - Arguments to update or create a QuizResultQueue.
     * @example
     * // Update or create a QuizResultQueue
     * const quizResultQueue = await prisma.quizResultQueue.upsert({
     *   create: {
     *     // ... data to create a QuizResultQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizResultQueue we want to update
     *   }
     * })
     */
    upsert<T extends QuizResultQueueUpsertArgs>(args: SelectSubset<T, QuizResultQueueUpsertArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizResultQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueCountArgs} args - Arguments to filter QuizResultQueues to count.
     * @example
     * // Count the number of QuizResultQueues
     * const count = await prisma.quizResultQueue.count({
     *   where: {
     *     // ... the filter for the QuizResultQueues we want to count
     *   }
     * })
    **/
    count<T extends QuizResultQueueCountArgs>(
      args?: Subset<T, QuizResultQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizResultQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizResultQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizResultQueueAggregateArgs>(args: Subset<T, QuizResultQueueAggregateArgs>): Prisma.PrismaPromise<GetQuizResultQueueAggregateType<T>>

    /**
     * Group by QuizResultQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueGroupByArgs} args - Group by arguments.
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
      T extends QuizResultQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizResultQueueGroupByArgs['orderBy'] }
        : { orderBy?: QuizResultQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizResultQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizResultQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizResultQueue model
   */
  readonly fields: QuizResultQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizResultQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizResultQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    QuizResultQueueOutbox<T extends QuizResultQueue$QuizResultQueueOutboxArgs<ExtArgs> = {}>(args?: Subset<T, QuizResultQueue$QuizResultQueueOutboxArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizResultQueue model
   */
  interface QuizResultQueueFieldRefs {
    readonly id: FieldRef<"QuizResultQueue", 'String'>
    readonly quizId: FieldRef<"QuizResultQueue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizResultQueue findUnique
   */
  export type QuizResultQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueue to fetch.
     */
    where: QuizResultQueueWhereUniqueInput
  }

  /**
   * QuizResultQueue findUniqueOrThrow
   */
  export type QuizResultQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueue to fetch.
     */
    where: QuizResultQueueWhereUniqueInput
  }

  /**
   * QuizResultQueue findFirst
   */
  export type QuizResultQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueue to fetch.
     */
    where?: QuizResultQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResultQueues to fetch.
     */
    orderBy?: QuizResultQueueOrderByWithRelationInput | QuizResultQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResultQueues.
     */
    cursor?: QuizResultQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResultQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResultQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResultQueues.
     */
    distinct?: QuizResultQueueScalarFieldEnum | QuizResultQueueScalarFieldEnum[]
  }

  /**
   * QuizResultQueue findFirstOrThrow
   */
  export type QuizResultQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueue to fetch.
     */
    where?: QuizResultQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResultQueues to fetch.
     */
    orderBy?: QuizResultQueueOrderByWithRelationInput | QuizResultQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResultQueues.
     */
    cursor?: QuizResultQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResultQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResultQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResultQueues.
     */
    distinct?: QuizResultQueueScalarFieldEnum | QuizResultQueueScalarFieldEnum[]
  }

  /**
   * QuizResultQueue findMany
   */
  export type QuizResultQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueues to fetch.
     */
    where?: QuizResultQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResultQueues to fetch.
     */
    orderBy?: QuizResultQueueOrderByWithRelationInput | QuizResultQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizResultQueues.
     */
    cursor?: QuizResultQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResultQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResultQueues.
     */
    skip?: number
    distinct?: QuizResultQueueScalarFieldEnum | QuizResultQueueScalarFieldEnum[]
  }

  /**
   * QuizResultQueue create
   */
  export type QuizResultQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizResultQueue.
     */
    data: XOR<QuizResultQueueCreateInput, QuizResultQueueUncheckedCreateInput>
  }

  /**
   * QuizResultQueue createMany
   */
  export type QuizResultQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizResultQueues.
     */
    data: QuizResultQueueCreateManyInput | QuizResultQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizResultQueue createManyAndReturn
   */
  export type QuizResultQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * The data used to create many QuizResultQueues.
     */
    data: QuizResultQueueCreateManyInput | QuizResultQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizResultQueue update
   */
  export type QuizResultQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizResultQueue.
     */
    data: XOR<QuizResultQueueUpdateInput, QuizResultQueueUncheckedUpdateInput>
    /**
     * Choose, which QuizResultQueue to update.
     */
    where: QuizResultQueueWhereUniqueInput
  }

  /**
   * QuizResultQueue updateMany
   */
  export type QuizResultQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizResultQueues.
     */
    data: XOR<QuizResultQueueUpdateManyMutationInput, QuizResultQueueUncheckedUpdateManyInput>
    /**
     * Filter which QuizResultQueues to update
     */
    where?: QuizResultQueueWhereInput
    /**
     * Limit how many QuizResultQueues to update.
     */
    limit?: number
  }

  /**
   * QuizResultQueue updateManyAndReturn
   */
  export type QuizResultQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * The data used to update QuizResultQueues.
     */
    data: XOR<QuizResultQueueUpdateManyMutationInput, QuizResultQueueUncheckedUpdateManyInput>
    /**
     * Filter which QuizResultQueues to update
     */
    where?: QuizResultQueueWhereInput
    /**
     * Limit how many QuizResultQueues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizResultQueue upsert
   */
  export type QuizResultQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizResultQueue to update in case it exists.
     */
    where: QuizResultQueueWhereUniqueInput
    /**
     * In case the QuizResultQueue found by the `where` argument doesn't exist, create a new QuizResultQueue with this data.
     */
    create: XOR<QuizResultQueueCreateInput, QuizResultQueueUncheckedCreateInput>
    /**
     * In case the QuizResultQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizResultQueueUpdateInput, QuizResultQueueUncheckedUpdateInput>
  }

  /**
   * QuizResultQueue delete
   */
  export type QuizResultQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
    /**
     * Filter which QuizResultQueue to delete.
     */
    where: QuizResultQueueWhereUniqueInput
  }

  /**
   * QuizResultQueue deleteMany
   */
  export type QuizResultQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResultQueues to delete
     */
    where?: QuizResultQueueWhereInput
    /**
     * Limit how many QuizResultQueues to delete.
     */
    limit?: number
  }

  /**
   * QuizResultQueue.QuizResultQueueOutbox
   */
  export type QuizResultQueue$QuizResultQueueOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    where?: QuizResultQueueOutboxWhereInput
  }

  /**
   * QuizResultQueue without action
   */
  export type QuizResultQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueue
     */
    select?: QuizResultQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueue
     */
    omit?: QuizResultQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueInclude<ExtArgs> | null
  }


  /**
   * Model QuizResultQueueOutbox
   */

  export type AggregateQuizResultQueueOutbox = {
    _count: QuizResultQueueOutboxCountAggregateOutputType | null
    _min: QuizResultQueueOutboxMinAggregateOutputType | null
    _max: QuizResultQueueOutboxMaxAggregateOutputType | null
  }

  export type QuizResultQueueOutboxMinAggregateOutputType = {
    id: string | null
    quizResultQueueId: string | null
  }

  export type QuizResultQueueOutboxMaxAggregateOutputType = {
    id: string | null
    quizResultQueueId: string | null
  }

  export type QuizResultQueueOutboxCountAggregateOutputType = {
    id: number
    quizResultQueueId: number
    _all: number
  }


  export type QuizResultQueueOutboxMinAggregateInputType = {
    id?: true
    quizResultQueueId?: true
  }

  export type QuizResultQueueOutboxMaxAggregateInputType = {
    id?: true
    quizResultQueueId?: true
  }

  export type QuizResultQueueOutboxCountAggregateInputType = {
    id?: true
    quizResultQueueId?: true
    _all?: true
  }

  export type QuizResultQueueOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResultQueueOutbox to aggregate.
     */
    where?: QuizResultQueueOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResultQueueOutboxes to fetch.
     */
    orderBy?: QuizResultQueueOutboxOrderByWithRelationInput | QuizResultQueueOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizResultQueueOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResultQueueOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResultQueueOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizResultQueueOutboxes
    **/
    _count?: true | QuizResultQueueOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizResultQueueOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizResultQueueOutboxMaxAggregateInputType
  }

  export type GetQuizResultQueueOutboxAggregateType<T extends QuizResultQueueOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizResultQueueOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizResultQueueOutbox[P]>
      : GetScalarType<T[P], AggregateQuizResultQueueOutbox[P]>
  }




  export type QuizResultQueueOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResultQueueOutboxWhereInput
    orderBy?: QuizResultQueueOutboxOrderByWithAggregationInput | QuizResultQueueOutboxOrderByWithAggregationInput[]
    by: QuizResultQueueOutboxScalarFieldEnum[] | QuizResultQueueOutboxScalarFieldEnum
    having?: QuizResultQueueOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizResultQueueOutboxCountAggregateInputType | true
    _min?: QuizResultQueueOutboxMinAggregateInputType
    _max?: QuizResultQueueOutboxMaxAggregateInputType
  }

  export type QuizResultQueueOutboxGroupByOutputType = {
    id: string
    quizResultQueueId: string
    _count: QuizResultQueueOutboxCountAggregateOutputType | null
    _min: QuizResultQueueOutboxMinAggregateOutputType | null
    _max: QuizResultQueueOutboxMaxAggregateOutputType | null
  }

  type GetQuizResultQueueOutboxGroupByPayload<T extends QuizResultQueueOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizResultQueueOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizResultQueueOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizResultQueueOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], QuizResultQueueOutboxGroupByOutputType[P]>
        }
      >
    >


  export type QuizResultQueueOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizResultQueueId?: boolean
    QuizResultQueue?: boolean | QuizResultQueueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResultQueueOutbox"]>

  export type QuizResultQueueOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizResultQueueId?: boolean
    QuizResultQueue?: boolean | QuizResultQueueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResultQueueOutbox"]>

  export type QuizResultQueueOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizResultQueueId?: boolean
    QuizResultQueue?: boolean | QuizResultQueueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResultQueueOutbox"]>

  export type QuizResultQueueOutboxSelectScalar = {
    id?: boolean
    quizResultQueueId?: boolean
  }

  export type QuizResultQueueOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizResultQueueId", ExtArgs["result"]["quizResultQueueOutbox"]>
  export type QuizResultQueueOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    QuizResultQueue?: boolean | QuizResultQueueDefaultArgs<ExtArgs>
  }
  export type QuizResultQueueOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    QuizResultQueue?: boolean | QuizResultQueueDefaultArgs<ExtArgs>
  }
  export type QuizResultQueueOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    QuizResultQueue?: boolean | QuizResultQueueDefaultArgs<ExtArgs>
  }

  export type $QuizResultQueueOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizResultQueueOutbox"
    objects: {
      QuizResultQueue: Prisma.$QuizResultQueuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizResultQueueId: string
    }, ExtArgs["result"]["quizResultQueueOutbox"]>
    composites: {}
  }

  type QuizResultQueueOutboxGetPayload<S extends boolean | null | undefined | QuizResultQueueOutboxDefaultArgs> = $Result.GetResult<Prisma.$QuizResultQueueOutboxPayload, S>

  type QuizResultQueueOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizResultQueueOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizResultQueueOutboxCountAggregateInputType | true
    }

  export interface QuizResultQueueOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizResultQueueOutbox'], meta: { name: 'QuizResultQueueOutbox' } }
    /**
     * Find zero or one QuizResultQueueOutbox that matches the filter.
     * @param {QuizResultQueueOutboxFindUniqueArgs} args - Arguments to find a QuizResultQueueOutbox
     * @example
     * // Get one QuizResultQueueOutbox
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizResultQueueOutboxFindUniqueArgs>(args: SelectSubset<T, QuizResultQueueOutboxFindUniqueArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizResultQueueOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizResultQueueOutboxFindUniqueOrThrowArgs} args - Arguments to find a QuizResultQueueOutbox
     * @example
     * // Get one QuizResultQueueOutbox
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizResultQueueOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizResultQueueOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResultQueueOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueOutboxFindFirstArgs} args - Arguments to find a QuizResultQueueOutbox
     * @example
     * // Get one QuizResultQueueOutbox
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizResultQueueOutboxFindFirstArgs>(args?: SelectSubset<T, QuizResultQueueOutboxFindFirstArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResultQueueOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueOutboxFindFirstOrThrowArgs} args - Arguments to find a QuizResultQueueOutbox
     * @example
     * // Get one QuizResultQueueOutbox
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizResultQueueOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizResultQueueOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizResultQueueOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizResultQueueOutboxes
     * const quizResultQueueOutboxes = await prisma.quizResultQueueOutbox.findMany()
     * 
     * // Get first 10 QuizResultQueueOutboxes
     * const quizResultQueueOutboxes = await prisma.quizResultQueueOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizResultQueueOutboxWithIdOnly = await prisma.quizResultQueueOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizResultQueueOutboxFindManyArgs>(args?: SelectSubset<T, QuizResultQueueOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizResultQueueOutbox.
     * @param {QuizResultQueueOutboxCreateArgs} args - Arguments to create a QuizResultQueueOutbox.
     * @example
     * // Create one QuizResultQueueOutbox
     * const QuizResultQueueOutbox = await prisma.quizResultQueueOutbox.create({
     *   data: {
     *     // ... data to create a QuizResultQueueOutbox
     *   }
     * })
     * 
     */
    create<T extends QuizResultQueueOutboxCreateArgs>(args: SelectSubset<T, QuizResultQueueOutboxCreateArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizResultQueueOutboxes.
     * @param {QuizResultQueueOutboxCreateManyArgs} args - Arguments to create many QuizResultQueueOutboxes.
     * @example
     * // Create many QuizResultQueueOutboxes
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizResultQueueOutboxCreateManyArgs>(args?: SelectSubset<T, QuizResultQueueOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizResultQueueOutboxes and returns the data saved in the database.
     * @param {QuizResultQueueOutboxCreateManyAndReturnArgs} args - Arguments to create many QuizResultQueueOutboxes.
     * @example
     * // Create many QuizResultQueueOutboxes
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizResultQueueOutboxes and only return the `id`
     * const quizResultQueueOutboxWithIdOnly = await prisma.quizResultQueueOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizResultQueueOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizResultQueueOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizResultQueueOutbox.
     * @param {QuizResultQueueOutboxDeleteArgs} args - Arguments to delete one QuizResultQueueOutbox.
     * @example
     * // Delete one QuizResultQueueOutbox
     * const QuizResultQueueOutbox = await prisma.quizResultQueueOutbox.delete({
     *   where: {
     *     // ... filter to delete one QuizResultQueueOutbox
     *   }
     * })
     * 
     */
    delete<T extends QuizResultQueueOutboxDeleteArgs>(args: SelectSubset<T, QuizResultQueueOutboxDeleteArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizResultQueueOutbox.
     * @param {QuizResultQueueOutboxUpdateArgs} args - Arguments to update one QuizResultQueueOutbox.
     * @example
     * // Update one QuizResultQueueOutbox
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizResultQueueOutboxUpdateArgs>(args: SelectSubset<T, QuizResultQueueOutboxUpdateArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizResultQueueOutboxes.
     * @param {QuizResultQueueOutboxDeleteManyArgs} args - Arguments to filter QuizResultQueueOutboxes to delete.
     * @example
     * // Delete a few QuizResultQueueOutboxes
     * const { count } = await prisma.quizResultQueueOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizResultQueueOutboxDeleteManyArgs>(args?: SelectSubset<T, QuizResultQueueOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResultQueueOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizResultQueueOutboxes
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizResultQueueOutboxUpdateManyArgs>(args: SelectSubset<T, QuizResultQueueOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResultQueueOutboxes and returns the data updated in the database.
     * @param {QuizResultQueueOutboxUpdateManyAndReturnArgs} args - Arguments to update many QuizResultQueueOutboxes.
     * @example
     * // Update many QuizResultQueueOutboxes
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizResultQueueOutboxes and only return the `id`
     * const quizResultQueueOutboxWithIdOnly = await prisma.quizResultQueueOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizResultQueueOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizResultQueueOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizResultQueueOutbox.
     * @param {QuizResultQueueOutboxUpsertArgs} args - Arguments to update or create a QuizResultQueueOutbox.
     * @example
     * // Update or create a QuizResultQueueOutbox
     * const quizResultQueueOutbox = await prisma.quizResultQueueOutbox.upsert({
     *   create: {
     *     // ... data to create a QuizResultQueueOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizResultQueueOutbox we want to update
     *   }
     * })
     */
    upsert<T extends QuizResultQueueOutboxUpsertArgs>(args: SelectSubset<T, QuizResultQueueOutboxUpsertArgs<ExtArgs>>): Prisma__QuizResultQueueOutboxClient<$Result.GetResult<Prisma.$QuizResultQueueOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizResultQueueOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueOutboxCountArgs} args - Arguments to filter QuizResultQueueOutboxes to count.
     * @example
     * // Count the number of QuizResultQueueOutboxes
     * const count = await prisma.quizResultQueueOutbox.count({
     *   where: {
     *     // ... the filter for the QuizResultQueueOutboxes we want to count
     *   }
     * })
    **/
    count<T extends QuizResultQueueOutboxCountArgs>(
      args?: Subset<T, QuizResultQueueOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizResultQueueOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizResultQueueOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizResultQueueOutboxAggregateArgs>(args: Subset<T, QuizResultQueueOutboxAggregateArgs>): Prisma.PrismaPromise<GetQuizResultQueueOutboxAggregateType<T>>

    /**
     * Group by QuizResultQueueOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultQueueOutboxGroupByArgs} args - Group by arguments.
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
      T extends QuizResultQueueOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizResultQueueOutboxGroupByArgs['orderBy'] }
        : { orderBy?: QuizResultQueueOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizResultQueueOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizResultQueueOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizResultQueueOutbox model
   */
  readonly fields: QuizResultQueueOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizResultQueueOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizResultQueueOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    QuizResultQueue<T extends QuizResultQueueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizResultQueueDefaultArgs<ExtArgs>>): Prisma__QuizResultQueueClient<$Result.GetResult<Prisma.$QuizResultQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizResultQueueOutbox model
   */
  interface QuizResultQueueOutboxFieldRefs {
    readonly id: FieldRef<"QuizResultQueueOutbox", 'String'>
    readonly quizResultQueueId: FieldRef<"QuizResultQueueOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizResultQueueOutbox findUnique
   */
  export type QuizResultQueueOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueueOutbox to fetch.
     */
    where: QuizResultQueueOutboxWhereUniqueInput
  }

  /**
   * QuizResultQueueOutbox findUniqueOrThrow
   */
  export type QuizResultQueueOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueueOutbox to fetch.
     */
    where: QuizResultQueueOutboxWhereUniqueInput
  }

  /**
   * QuizResultQueueOutbox findFirst
   */
  export type QuizResultQueueOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueueOutbox to fetch.
     */
    where?: QuizResultQueueOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResultQueueOutboxes to fetch.
     */
    orderBy?: QuizResultQueueOutboxOrderByWithRelationInput | QuizResultQueueOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResultQueueOutboxes.
     */
    cursor?: QuizResultQueueOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResultQueueOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResultQueueOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResultQueueOutboxes.
     */
    distinct?: QuizResultQueueOutboxScalarFieldEnum | QuizResultQueueOutboxScalarFieldEnum[]
  }

  /**
   * QuizResultQueueOutbox findFirstOrThrow
   */
  export type QuizResultQueueOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueueOutbox to fetch.
     */
    where?: QuizResultQueueOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResultQueueOutboxes to fetch.
     */
    orderBy?: QuizResultQueueOutboxOrderByWithRelationInput | QuizResultQueueOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResultQueueOutboxes.
     */
    cursor?: QuizResultQueueOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResultQueueOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResultQueueOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResultQueueOutboxes.
     */
    distinct?: QuizResultQueueOutboxScalarFieldEnum | QuizResultQueueOutboxScalarFieldEnum[]
  }

  /**
   * QuizResultQueueOutbox findMany
   */
  export type QuizResultQueueOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * Filter, which QuizResultQueueOutboxes to fetch.
     */
    where?: QuizResultQueueOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResultQueueOutboxes to fetch.
     */
    orderBy?: QuizResultQueueOutboxOrderByWithRelationInput | QuizResultQueueOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizResultQueueOutboxes.
     */
    cursor?: QuizResultQueueOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResultQueueOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResultQueueOutboxes.
     */
    skip?: number
    distinct?: QuizResultQueueOutboxScalarFieldEnum | QuizResultQueueOutboxScalarFieldEnum[]
  }

  /**
   * QuizResultQueueOutbox create
   */
  export type QuizResultQueueOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizResultQueueOutbox.
     */
    data: XOR<QuizResultQueueOutboxCreateInput, QuizResultQueueOutboxUncheckedCreateInput>
  }

  /**
   * QuizResultQueueOutbox createMany
   */
  export type QuizResultQueueOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizResultQueueOutboxes.
     */
    data: QuizResultQueueOutboxCreateManyInput | QuizResultQueueOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizResultQueueOutbox createManyAndReturn
   */
  export type QuizResultQueueOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many QuizResultQueueOutboxes.
     */
    data: QuizResultQueueOutboxCreateManyInput | QuizResultQueueOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizResultQueueOutbox update
   */
  export type QuizResultQueueOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizResultQueueOutbox.
     */
    data: XOR<QuizResultQueueOutboxUpdateInput, QuizResultQueueOutboxUncheckedUpdateInput>
    /**
     * Choose, which QuizResultQueueOutbox to update.
     */
    where: QuizResultQueueOutboxWhereUniqueInput
  }

  /**
   * QuizResultQueueOutbox updateMany
   */
  export type QuizResultQueueOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizResultQueueOutboxes.
     */
    data: XOR<QuizResultQueueOutboxUpdateManyMutationInput, QuizResultQueueOutboxUncheckedUpdateManyInput>
    /**
     * Filter which QuizResultQueueOutboxes to update
     */
    where?: QuizResultQueueOutboxWhereInput
    /**
     * Limit how many QuizResultQueueOutboxes to update.
     */
    limit?: number
  }

  /**
   * QuizResultQueueOutbox updateManyAndReturn
   */
  export type QuizResultQueueOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * The data used to update QuizResultQueueOutboxes.
     */
    data: XOR<QuizResultQueueOutboxUpdateManyMutationInput, QuizResultQueueOutboxUncheckedUpdateManyInput>
    /**
     * Filter which QuizResultQueueOutboxes to update
     */
    where?: QuizResultQueueOutboxWhereInput
    /**
     * Limit how many QuizResultQueueOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizResultQueueOutbox upsert
   */
  export type QuizResultQueueOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizResultQueueOutbox to update in case it exists.
     */
    where: QuizResultQueueOutboxWhereUniqueInput
    /**
     * In case the QuizResultQueueOutbox found by the `where` argument doesn't exist, create a new QuizResultQueueOutbox with this data.
     */
    create: XOR<QuizResultQueueOutboxCreateInput, QuizResultQueueOutboxUncheckedCreateInput>
    /**
     * In case the QuizResultQueueOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizResultQueueOutboxUpdateInput, QuizResultQueueOutboxUncheckedUpdateInput>
  }

  /**
   * QuizResultQueueOutbox delete
   */
  export type QuizResultQueueOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
    /**
     * Filter which QuizResultQueueOutbox to delete.
     */
    where: QuizResultQueueOutboxWhereUniqueInput
  }

  /**
   * QuizResultQueueOutbox deleteMany
   */
  export type QuizResultQueueOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResultQueueOutboxes to delete
     */
    where?: QuizResultQueueOutboxWhereInput
    /**
     * Limit how many QuizResultQueueOutboxes to delete.
     */
    limit?: number
  }

  /**
   * QuizResultQueueOutbox without action
   */
  export type QuizResultQueueOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResultQueueOutbox
     */
    select?: QuizResultQueueOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResultQueueOutbox
     */
    omit?: QuizResultQueueOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultQueueOutboxInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardMinAggregateOutputType = {
    id: string | null
    quizId: string | null
    brand: $Enums.RewardBrands | null
    voucherCode: string | null
  }

  export type RewardMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
    brand: $Enums.RewardBrands | null
    voucherCode: string | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    quizId: number
    brand: number
    voucherCode: number
    _all: number
  }


  export type RewardMinAggregateInputType = {
    id?: true
    quizId?: true
    brand?: true
    voucherCode?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    quizId?: true
    brand?: true
    voucherCode?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    quizId?: true
    brand?: true
    voucherCode?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: string
    quizId: string
    brand: $Enums.RewardBrands
    voucherCode: string
    _count: RewardCountAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    brand?: boolean
    voucherCode?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    brand?: boolean
    voucherCode?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    brand?: boolean
    voucherCode?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    quizId?: boolean
    brand?: boolean
    voucherCode?: boolean
  }

  export type RewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "brand" | "voucherCode", ExtArgs["result"]["reward"]>
  export type RewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type RewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type RewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {
      Quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
      brand: $Enums.RewardBrands
      voucherCode: string
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards and returns the data updated in the database.
     * @param {RewardUpdateManyAndReturnArgs} args - Arguments to update many Rewards.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RewardUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
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
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reward model
   */
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'String'>
    readonly quizId: FieldRef<"Reward", 'String'>
    readonly brand: FieldRef<"Reward", 'RewardBrands'>
    readonly voucherCode: FieldRef<"Reward", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward updateManyAndReturn
   */
  export type RewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
  }


  /**
   * Model ScoreDistribution
   */

  export type AggregateScoreDistribution = {
    _count: ScoreDistributionCountAggregateOutputType | null
    _avg: ScoreDistributionAvgAggregateOutputType | null
    _sum: ScoreDistributionSumAggregateOutputType | null
    _min: ScoreDistributionMinAggregateOutputType | null
    _max: ScoreDistributionMaxAggregateOutputType | null
  }

  export type ScoreDistributionAvgAggregateOutputType = {
    count: number | null
  }

  export type ScoreDistributionSumAggregateOutputType = {
    count: number | null
  }

  export type ScoreDistributionMinAggregateOutputType = {
    id: string | null
    quizId: string | null
    count: number | null
    label: string | null
  }

  export type ScoreDistributionMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
    count: number | null
    label: string | null
  }

  export type ScoreDistributionCountAggregateOutputType = {
    id: number
    quizId: number
    count: number
    label: number
    _all: number
  }


  export type ScoreDistributionAvgAggregateInputType = {
    count?: true
  }

  export type ScoreDistributionSumAggregateInputType = {
    count?: true
  }

  export type ScoreDistributionMinAggregateInputType = {
    id?: true
    quizId?: true
    count?: true
    label?: true
  }

  export type ScoreDistributionMaxAggregateInputType = {
    id?: true
    quizId?: true
    count?: true
    label?: true
  }

  export type ScoreDistributionCountAggregateInputType = {
    id?: true
    quizId?: true
    count?: true
    label?: true
    _all?: true
  }

  export type ScoreDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreDistribution to aggregate.
     */
    where?: ScoreDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreDistributions to fetch.
     */
    orderBy?: ScoreDistributionOrderByWithRelationInput | ScoreDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoreDistributions
    **/
    _count?: true | ScoreDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreDistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreDistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreDistributionMaxAggregateInputType
  }

  export type GetScoreDistributionAggregateType<T extends ScoreDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateScoreDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoreDistribution[P]>
      : GetScalarType<T[P], AggregateScoreDistribution[P]>
  }




  export type ScoreDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreDistributionWhereInput
    orderBy?: ScoreDistributionOrderByWithAggregationInput | ScoreDistributionOrderByWithAggregationInput[]
    by: ScoreDistributionScalarFieldEnum[] | ScoreDistributionScalarFieldEnum
    having?: ScoreDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreDistributionCountAggregateInputType | true
    _avg?: ScoreDistributionAvgAggregateInputType
    _sum?: ScoreDistributionSumAggregateInputType
    _min?: ScoreDistributionMinAggregateInputType
    _max?: ScoreDistributionMaxAggregateInputType
  }

  export type ScoreDistributionGroupByOutputType = {
    id: string
    quizId: string
    count: number
    label: string
    _count: ScoreDistributionCountAggregateOutputType | null
    _avg: ScoreDistributionAvgAggregateOutputType | null
    _sum: ScoreDistributionSumAggregateOutputType | null
    _min: ScoreDistributionMinAggregateOutputType | null
    _max: ScoreDistributionMaxAggregateOutputType | null
  }

  type GetScoreDistributionGroupByPayload<T extends ScoreDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreDistributionGroupByOutputType[P]>
        }
      >
    >


  export type ScoreDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    count?: boolean
    label?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreDistribution"]>

  export type ScoreDistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    count?: boolean
    label?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreDistribution"]>

  export type ScoreDistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    count?: boolean
    label?: boolean
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreDistribution"]>

  export type ScoreDistributionSelectScalar = {
    id?: boolean
    quizId?: boolean
    count?: boolean
    label?: boolean
  }

  export type ScoreDistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "count" | "label", ExtArgs["result"]["scoreDistribution"]>
  export type ScoreDistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type ScoreDistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type ScoreDistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $ScoreDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoreDistribution"
    objects: {
      Quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
      count: number
      label: string
    }, ExtArgs["result"]["scoreDistribution"]>
    composites: {}
  }

  type ScoreDistributionGetPayload<S extends boolean | null | undefined | ScoreDistributionDefaultArgs> = $Result.GetResult<Prisma.$ScoreDistributionPayload, S>

  type ScoreDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreDistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreDistributionCountAggregateInputType | true
    }

  export interface ScoreDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoreDistribution'], meta: { name: 'ScoreDistribution' } }
    /**
     * Find zero or one ScoreDistribution that matches the filter.
     * @param {ScoreDistributionFindUniqueArgs} args - Arguments to find a ScoreDistribution
     * @example
     * // Get one ScoreDistribution
     * const scoreDistribution = await prisma.scoreDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreDistributionFindUniqueArgs>(args: SelectSubset<T, ScoreDistributionFindUniqueArgs<ExtArgs>>): Prisma__ScoreDistributionClient<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScoreDistribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreDistributionFindUniqueOrThrowArgs} args - Arguments to find a ScoreDistribution
     * @example
     * // Get one ScoreDistribution
     * const scoreDistribution = await prisma.scoreDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreDistributionClient<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDistributionFindFirstArgs} args - Arguments to find a ScoreDistribution
     * @example
     * // Get one ScoreDistribution
     * const scoreDistribution = await prisma.scoreDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreDistributionFindFirstArgs>(args?: SelectSubset<T, ScoreDistributionFindFirstArgs<ExtArgs>>): Prisma__ScoreDistributionClient<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDistributionFindFirstOrThrowArgs} args - Arguments to find a ScoreDistribution
     * @example
     * // Get one ScoreDistribution
     * const scoreDistribution = await prisma.scoreDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreDistributionClient<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScoreDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoreDistributions
     * const scoreDistributions = await prisma.scoreDistribution.findMany()
     * 
     * // Get first 10 ScoreDistributions
     * const scoreDistributions = await prisma.scoreDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreDistributionWithIdOnly = await prisma.scoreDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreDistributionFindManyArgs>(args?: SelectSubset<T, ScoreDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScoreDistribution.
     * @param {ScoreDistributionCreateArgs} args - Arguments to create a ScoreDistribution.
     * @example
     * // Create one ScoreDistribution
     * const ScoreDistribution = await prisma.scoreDistribution.create({
     *   data: {
     *     // ... data to create a ScoreDistribution
     *   }
     * })
     * 
     */
    create<T extends ScoreDistributionCreateArgs>(args: SelectSubset<T, ScoreDistributionCreateArgs<ExtArgs>>): Prisma__ScoreDistributionClient<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScoreDistributions.
     * @param {ScoreDistributionCreateManyArgs} args - Arguments to create many ScoreDistributions.
     * @example
     * // Create many ScoreDistributions
     * const scoreDistribution = await prisma.scoreDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreDistributionCreateManyArgs>(args?: SelectSubset<T, ScoreDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScoreDistributions and returns the data saved in the database.
     * @param {ScoreDistributionCreateManyAndReturnArgs} args - Arguments to create many ScoreDistributions.
     * @example
     * // Create many ScoreDistributions
     * const scoreDistribution = await prisma.scoreDistribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScoreDistributions and only return the `id`
     * const scoreDistributionWithIdOnly = await prisma.scoreDistribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreDistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreDistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScoreDistribution.
     * @param {ScoreDistributionDeleteArgs} args - Arguments to delete one ScoreDistribution.
     * @example
     * // Delete one ScoreDistribution
     * const ScoreDistribution = await prisma.scoreDistribution.delete({
     *   where: {
     *     // ... filter to delete one ScoreDistribution
     *   }
     * })
     * 
     */
    delete<T extends ScoreDistributionDeleteArgs>(args: SelectSubset<T, ScoreDistributionDeleteArgs<ExtArgs>>): Prisma__ScoreDistributionClient<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScoreDistribution.
     * @param {ScoreDistributionUpdateArgs} args - Arguments to update one ScoreDistribution.
     * @example
     * // Update one ScoreDistribution
     * const scoreDistribution = await prisma.scoreDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreDistributionUpdateArgs>(args: SelectSubset<T, ScoreDistributionUpdateArgs<ExtArgs>>): Prisma__ScoreDistributionClient<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScoreDistributions.
     * @param {ScoreDistributionDeleteManyArgs} args - Arguments to filter ScoreDistributions to delete.
     * @example
     * // Delete a few ScoreDistributions
     * const { count } = await prisma.scoreDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreDistributionDeleteManyArgs>(args?: SelectSubset<T, ScoreDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoreDistributions
     * const scoreDistribution = await prisma.scoreDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreDistributionUpdateManyArgs>(args: SelectSubset<T, ScoreDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreDistributions and returns the data updated in the database.
     * @param {ScoreDistributionUpdateManyAndReturnArgs} args - Arguments to update many ScoreDistributions.
     * @example
     * // Update many ScoreDistributions
     * const scoreDistribution = await prisma.scoreDistribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScoreDistributions and only return the `id`
     * const scoreDistributionWithIdOnly = await prisma.scoreDistribution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScoreDistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreDistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScoreDistribution.
     * @param {ScoreDistributionUpsertArgs} args - Arguments to update or create a ScoreDistribution.
     * @example
     * // Update or create a ScoreDistribution
     * const scoreDistribution = await prisma.scoreDistribution.upsert({
     *   create: {
     *     // ... data to create a ScoreDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoreDistribution we want to update
     *   }
     * })
     */
    upsert<T extends ScoreDistributionUpsertArgs>(args: SelectSubset<T, ScoreDistributionUpsertArgs<ExtArgs>>): Prisma__ScoreDistributionClient<$Result.GetResult<Prisma.$ScoreDistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScoreDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDistributionCountArgs} args - Arguments to filter ScoreDistributions to count.
     * @example
     * // Count the number of ScoreDistributions
     * const count = await prisma.scoreDistribution.count({
     *   where: {
     *     // ... the filter for the ScoreDistributions we want to count
     *   }
     * })
    **/
    count<T extends ScoreDistributionCountArgs>(
      args?: Subset<T, ScoreDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoreDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreDistributionAggregateArgs>(args: Subset<T, ScoreDistributionAggregateArgs>): Prisma.PrismaPromise<GetScoreDistributionAggregateType<T>>

    /**
     * Group by ScoreDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDistributionGroupByArgs} args - Group by arguments.
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
      T extends ScoreDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreDistributionGroupByArgs['orderBy'] }
        : { orderBy?: ScoreDistributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoreDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoreDistribution model
   */
  readonly fields: ScoreDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoreDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScoreDistribution model
   */
  interface ScoreDistributionFieldRefs {
    readonly id: FieldRef<"ScoreDistribution", 'String'>
    readonly quizId: FieldRef<"ScoreDistribution", 'String'>
    readonly count: FieldRef<"ScoreDistribution", 'Int'>
    readonly label: FieldRef<"ScoreDistribution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScoreDistribution findUnique
   */
  export type ScoreDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDistribution to fetch.
     */
    where: ScoreDistributionWhereUniqueInput
  }

  /**
   * ScoreDistribution findUniqueOrThrow
   */
  export type ScoreDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDistribution to fetch.
     */
    where: ScoreDistributionWhereUniqueInput
  }

  /**
   * ScoreDistribution findFirst
   */
  export type ScoreDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDistribution to fetch.
     */
    where?: ScoreDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreDistributions to fetch.
     */
    orderBy?: ScoreDistributionOrderByWithRelationInput | ScoreDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreDistributions.
     */
    cursor?: ScoreDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreDistributions.
     */
    distinct?: ScoreDistributionScalarFieldEnum | ScoreDistributionScalarFieldEnum[]
  }

  /**
   * ScoreDistribution findFirstOrThrow
   */
  export type ScoreDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDistribution to fetch.
     */
    where?: ScoreDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreDistributions to fetch.
     */
    orderBy?: ScoreDistributionOrderByWithRelationInput | ScoreDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreDistributions.
     */
    cursor?: ScoreDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreDistributions.
     */
    distinct?: ScoreDistributionScalarFieldEnum | ScoreDistributionScalarFieldEnum[]
  }

  /**
   * ScoreDistribution findMany
   */
  export type ScoreDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDistributions to fetch.
     */
    where?: ScoreDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreDistributions to fetch.
     */
    orderBy?: ScoreDistributionOrderByWithRelationInput | ScoreDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoreDistributions.
     */
    cursor?: ScoreDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreDistributions.
     */
    skip?: number
    distinct?: ScoreDistributionScalarFieldEnum | ScoreDistributionScalarFieldEnum[]
  }

  /**
   * ScoreDistribution create
   */
  export type ScoreDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a ScoreDistribution.
     */
    data: XOR<ScoreDistributionCreateInput, ScoreDistributionUncheckedCreateInput>
  }

  /**
   * ScoreDistribution createMany
   */
  export type ScoreDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoreDistributions.
     */
    data: ScoreDistributionCreateManyInput | ScoreDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScoreDistribution createManyAndReturn
   */
  export type ScoreDistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * The data used to create many ScoreDistributions.
     */
    data: ScoreDistributionCreateManyInput | ScoreDistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoreDistribution update
   */
  export type ScoreDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a ScoreDistribution.
     */
    data: XOR<ScoreDistributionUpdateInput, ScoreDistributionUncheckedUpdateInput>
    /**
     * Choose, which ScoreDistribution to update.
     */
    where: ScoreDistributionWhereUniqueInput
  }

  /**
   * ScoreDistribution updateMany
   */
  export type ScoreDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoreDistributions.
     */
    data: XOR<ScoreDistributionUpdateManyMutationInput, ScoreDistributionUncheckedUpdateManyInput>
    /**
     * Filter which ScoreDistributions to update
     */
    where?: ScoreDistributionWhereInput
    /**
     * Limit how many ScoreDistributions to update.
     */
    limit?: number
  }

  /**
   * ScoreDistribution updateManyAndReturn
   */
  export type ScoreDistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * The data used to update ScoreDistributions.
     */
    data: XOR<ScoreDistributionUpdateManyMutationInput, ScoreDistributionUncheckedUpdateManyInput>
    /**
     * Filter which ScoreDistributions to update
     */
    where?: ScoreDistributionWhereInput
    /**
     * Limit how many ScoreDistributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoreDistribution upsert
   */
  export type ScoreDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the ScoreDistribution to update in case it exists.
     */
    where: ScoreDistributionWhereUniqueInput
    /**
     * In case the ScoreDistribution found by the `where` argument doesn't exist, create a new ScoreDistribution with this data.
     */
    create: XOR<ScoreDistributionCreateInput, ScoreDistributionUncheckedCreateInput>
    /**
     * In case the ScoreDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreDistributionUpdateInput, ScoreDistributionUncheckedUpdateInput>
  }

  /**
   * ScoreDistribution delete
   */
  export type ScoreDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter which ScoreDistribution to delete.
     */
    where: ScoreDistributionWhereUniqueInput
  }

  /**
   * ScoreDistribution deleteMany
   */
  export type ScoreDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreDistributions to delete
     */
    where?: ScoreDistributionWhereInput
    /**
     * Limit how many ScoreDistributions to delete.
     */
    limit?: number
  }

  /**
   * ScoreDistribution without action
   */
  export type ScoreDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDistribution
     */
    select?: ScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreDistribution
     */
    omit?: ScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreDistributionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    mailVerified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    mailVerified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    mailVerified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    mailVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    mailVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    mailVerified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    mailVerified: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    mailVerified?: boolean
    Participant?: boolean | User$ParticipantArgs<ExtArgs>
    Question?: boolean | User$QuestionArgs<ExtArgs>
    Quiz?: boolean | User$QuizArgs<ExtArgs>
    UserDiscord?: boolean | User$UserDiscordArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    mailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    mailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    mailVerified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "mailVerified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Participant?: boolean | User$ParticipantArgs<ExtArgs>
    Question?: boolean | User$QuestionArgs<ExtArgs>
    Quiz?: boolean | User$QuizArgs<ExtArgs>
    UserDiscord?: boolean | User$UserDiscordArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Participant: Prisma.$ParticipantPayload<ExtArgs>[]
      Question: Prisma.$QuestionPayload<ExtArgs>[]
      Quiz: Prisma.$QuizPayload<ExtArgs>[]
      UserDiscord: Prisma.$UserDiscordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      mailVerified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Participant<T extends User$ParticipantArgs<ExtArgs> = {}>(args?: Subset<T, User$ParticipantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Question<T extends User$QuestionArgs<ExtArgs> = {}>(args?: Subset<T, User$QuestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Quiz<T extends User$QuizArgs<ExtArgs> = {}>(args?: Subset<T, User$QuizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserDiscord<T extends User$UserDiscordArgs<ExtArgs> = {}>(args?: Subset<T, User$UserDiscordArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly mailVerified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Participant
   */
  export type User$ParticipantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * User.Question
   */
  export type User$QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.Quiz
   */
  export type User$QuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * User.UserDiscord
   */
  export type User$UserDiscordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    where?: UserDiscordWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserDiscord
   */

  export type AggregateUserDiscord = {
    _count: UserDiscordCountAggregateOutputType | null
    _min: UserDiscordMinAggregateOutputType | null
    _max: UserDiscordMaxAggregateOutputType | null
  }

  export type UserDiscordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    discordId: string | null
    discordUsername: string | null
    discordDiscriminator: string | null
    accessToken: string | null
    refreshToken: string | null
    connectedAt: Date | null
  }

  export type UserDiscordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    discordId: string | null
    discordUsername: string | null
    discordDiscriminator: string | null
    accessToken: string | null
    refreshToken: string | null
    connectedAt: Date | null
  }

  export type UserDiscordCountAggregateOutputType = {
    id: number
    userId: number
    discordId: number
    discordUsername: number
    discordDiscriminator: number
    accessToken: number
    refreshToken: number
    connectedAt: number
    _all: number
  }


  export type UserDiscordMinAggregateInputType = {
    id?: true
    userId?: true
    discordId?: true
    discordUsername?: true
    discordDiscriminator?: true
    accessToken?: true
    refreshToken?: true
    connectedAt?: true
  }

  export type UserDiscordMaxAggregateInputType = {
    id?: true
    userId?: true
    discordId?: true
    discordUsername?: true
    discordDiscriminator?: true
    accessToken?: true
    refreshToken?: true
    connectedAt?: true
  }

  export type UserDiscordCountAggregateInputType = {
    id?: true
    userId?: true
    discordId?: true
    discordUsername?: true
    discordDiscriminator?: true
    accessToken?: true
    refreshToken?: true
    connectedAt?: true
    _all?: true
  }

  export type UserDiscordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDiscord to aggregate.
     */
    where?: UserDiscordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiscords to fetch.
     */
    orderBy?: UserDiscordOrderByWithRelationInput | UserDiscordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDiscordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiscords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiscords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDiscords
    **/
    _count?: true | UserDiscordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDiscordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDiscordMaxAggregateInputType
  }

  export type GetUserDiscordAggregateType<T extends UserDiscordAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDiscord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDiscord[P]>
      : GetScalarType<T[P], AggregateUserDiscord[P]>
  }




  export type UserDiscordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiscordWhereInput
    orderBy?: UserDiscordOrderByWithAggregationInput | UserDiscordOrderByWithAggregationInput[]
    by: UserDiscordScalarFieldEnum[] | UserDiscordScalarFieldEnum
    having?: UserDiscordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDiscordCountAggregateInputType | true
    _min?: UserDiscordMinAggregateInputType
    _max?: UserDiscordMaxAggregateInputType
  }

  export type UserDiscordGroupByOutputType = {
    id: string
    userId: string
    discordId: string
    discordUsername: string
    discordDiscriminator: string
    accessToken: string
    refreshToken: string
    connectedAt: Date
    _count: UserDiscordCountAggregateOutputType | null
    _min: UserDiscordMinAggregateOutputType | null
    _max: UserDiscordMaxAggregateOutputType | null
  }

  type GetUserDiscordGroupByPayload<T extends UserDiscordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDiscordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDiscordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDiscordGroupByOutputType[P]>
            : GetScalarType<T[P], UserDiscordGroupByOutputType[P]>
        }
      >
    >


  export type UserDiscordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    discordId?: boolean
    discordUsername?: boolean
    discordDiscriminator?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    connectedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDiscord"]>

  export type UserDiscordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    discordId?: boolean
    discordUsername?: boolean
    discordDiscriminator?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    connectedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDiscord"]>

  export type UserDiscordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    discordId?: boolean
    discordUsername?: boolean
    discordDiscriminator?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    connectedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDiscord"]>

  export type UserDiscordSelectScalar = {
    id?: boolean
    userId?: boolean
    discordId?: boolean
    discordUsername?: boolean
    discordDiscriminator?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    connectedAt?: boolean
  }

  export type UserDiscordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "discordId" | "discordUsername" | "discordDiscriminator" | "accessToken" | "refreshToken" | "connectedAt", ExtArgs["result"]["userDiscord"]>
  export type UserDiscordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDiscordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDiscordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDiscordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDiscord"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      discordId: string
      discordUsername: string
      discordDiscriminator: string
      accessToken: string
      refreshToken: string
      connectedAt: Date
    }, ExtArgs["result"]["userDiscord"]>
    composites: {}
  }

  type UserDiscordGetPayload<S extends boolean | null | undefined | UserDiscordDefaultArgs> = $Result.GetResult<Prisma.$UserDiscordPayload, S>

  type UserDiscordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDiscordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDiscordCountAggregateInputType | true
    }

  export interface UserDiscordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDiscord'], meta: { name: 'UserDiscord' } }
    /**
     * Find zero or one UserDiscord that matches the filter.
     * @param {UserDiscordFindUniqueArgs} args - Arguments to find a UserDiscord
     * @example
     * // Get one UserDiscord
     * const userDiscord = await prisma.userDiscord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDiscordFindUniqueArgs>(args: SelectSubset<T, UserDiscordFindUniqueArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDiscord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDiscordFindUniqueOrThrowArgs} args - Arguments to find a UserDiscord
     * @example
     * // Get one UserDiscord
     * const userDiscord = await prisma.userDiscord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDiscordFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDiscordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDiscord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscordFindFirstArgs} args - Arguments to find a UserDiscord
     * @example
     * // Get one UserDiscord
     * const userDiscord = await prisma.userDiscord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDiscordFindFirstArgs>(args?: SelectSubset<T, UserDiscordFindFirstArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDiscord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscordFindFirstOrThrowArgs} args - Arguments to find a UserDiscord
     * @example
     * // Get one UserDiscord
     * const userDiscord = await prisma.userDiscord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDiscordFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDiscordFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDiscords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDiscords
     * const userDiscords = await prisma.userDiscord.findMany()
     * 
     * // Get first 10 UserDiscords
     * const userDiscords = await prisma.userDiscord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDiscordWithIdOnly = await prisma.userDiscord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDiscordFindManyArgs>(args?: SelectSubset<T, UserDiscordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDiscord.
     * @param {UserDiscordCreateArgs} args - Arguments to create a UserDiscord.
     * @example
     * // Create one UserDiscord
     * const UserDiscord = await prisma.userDiscord.create({
     *   data: {
     *     // ... data to create a UserDiscord
     *   }
     * })
     * 
     */
    create<T extends UserDiscordCreateArgs>(args: SelectSubset<T, UserDiscordCreateArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDiscords.
     * @param {UserDiscordCreateManyArgs} args - Arguments to create many UserDiscords.
     * @example
     * // Create many UserDiscords
     * const userDiscord = await prisma.userDiscord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDiscordCreateManyArgs>(args?: SelectSubset<T, UserDiscordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDiscords and returns the data saved in the database.
     * @param {UserDiscordCreateManyAndReturnArgs} args - Arguments to create many UserDiscords.
     * @example
     * // Create many UserDiscords
     * const userDiscord = await prisma.userDiscord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDiscords and only return the `id`
     * const userDiscordWithIdOnly = await prisma.userDiscord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDiscordCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDiscordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDiscord.
     * @param {UserDiscordDeleteArgs} args - Arguments to delete one UserDiscord.
     * @example
     * // Delete one UserDiscord
     * const UserDiscord = await prisma.userDiscord.delete({
     *   where: {
     *     // ... filter to delete one UserDiscord
     *   }
     * })
     * 
     */
    delete<T extends UserDiscordDeleteArgs>(args: SelectSubset<T, UserDiscordDeleteArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDiscord.
     * @param {UserDiscordUpdateArgs} args - Arguments to update one UserDiscord.
     * @example
     * // Update one UserDiscord
     * const userDiscord = await prisma.userDiscord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDiscordUpdateArgs>(args: SelectSubset<T, UserDiscordUpdateArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDiscords.
     * @param {UserDiscordDeleteManyArgs} args - Arguments to filter UserDiscords to delete.
     * @example
     * // Delete a few UserDiscords
     * const { count } = await prisma.userDiscord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDiscordDeleteManyArgs>(args?: SelectSubset<T, UserDiscordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDiscords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDiscords
     * const userDiscord = await prisma.userDiscord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDiscordUpdateManyArgs>(args: SelectSubset<T, UserDiscordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDiscords and returns the data updated in the database.
     * @param {UserDiscordUpdateManyAndReturnArgs} args - Arguments to update many UserDiscords.
     * @example
     * // Update many UserDiscords
     * const userDiscord = await prisma.userDiscord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDiscords and only return the `id`
     * const userDiscordWithIdOnly = await prisma.userDiscord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDiscordUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDiscordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDiscord.
     * @param {UserDiscordUpsertArgs} args - Arguments to update or create a UserDiscord.
     * @example
     * // Update or create a UserDiscord
     * const userDiscord = await prisma.userDiscord.upsert({
     *   create: {
     *     // ... data to create a UserDiscord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDiscord we want to update
     *   }
     * })
     */
    upsert<T extends UserDiscordUpsertArgs>(args: SelectSubset<T, UserDiscordUpsertArgs<ExtArgs>>): Prisma__UserDiscordClient<$Result.GetResult<Prisma.$UserDiscordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDiscords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscordCountArgs} args - Arguments to filter UserDiscords to count.
     * @example
     * // Count the number of UserDiscords
     * const count = await prisma.userDiscord.count({
     *   where: {
     *     // ... the filter for the UserDiscords we want to count
     *   }
     * })
    **/
    count<T extends UserDiscordCountArgs>(
      args?: Subset<T, UserDiscordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDiscordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDiscord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDiscordAggregateArgs>(args: Subset<T, UserDiscordAggregateArgs>): Prisma.PrismaPromise<GetUserDiscordAggregateType<T>>

    /**
     * Group by UserDiscord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscordGroupByArgs} args - Group by arguments.
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
      T extends UserDiscordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDiscordGroupByArgs['orderBy'] }
        : { orderBy?: UserDiscordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDiscordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDiscordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDiscord model
   */
  readonly fields: UserDiscordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDiscord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDiscordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDiscord model
   */
  interface UserDiscordFieldRefs {
    readonly id: FieldRef<"UserDiscord", 'String'>
    readonly userId: FieldRef<"UserDiscord", 'String'>
    readonly discordId: FieldRef<"UserDiscord", 'String'>
    readonly discordUsername: FieldRef<"UserDiscord", 'String'>
    readonly discordDiscriminator: FieldRef<"UserDiscord", 'String'>
    readonly accessToken: FieldRef<"UserDiscord", 'String'>
    readonly refreshToken: FieldRef<"UserDiscord", 'String'>
    readonly connectedAt: FieldRef<"UserDiscord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDiscord findUnique
   */
  export type UserDiscordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscord to fetch.
     */
    where: UserDiscordWhereUniqueInput
  }

  /**
   * UserDiscord findUniqueOrThrow
   */
  export type UserDiscordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscord to fetch.
     */
    where: UserDiscordWhereUniqueInput
  }

  /**
   * UserDiscord findFirst
   */
  export type UserDiscordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscord to fetch.
     */
    where?: UserDiscordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiscords to fetch.
     */
    orderBy?: UserDiscordOrderByWithRelationInput | UserDiscordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDiscords.
     */
    cursor?: UserDiscordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiscords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiscords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDiscords.
     */
    distinct?: UserDiscordScalarFieldEnum | UserDiscordScalarFieldEnum[]
  }

  /**
   * UserDiscord findFirstOrThrow
   */
  export type UserDiscordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscord to fetch.
     */
    where?: UserDiscordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiscords to fetch.
     */
    orderBy?: UserDiscordOrderByWithRelationInput | UserDiscordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDiscords.
     */
    cursor?: UserDiscordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiscords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiscords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDiscords.
     */
    distinct?: UserDiscordScalarFieldEnum | UserDiscordScalarFieldEnum[]
  }

  /**
   * UserDiscord findMany
   */
  export type UserDiscordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscords to fetch.
     */
    where?: UserDiscordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiscords to fetch.
     */
    orderBy?: UserDiscordOrderByWithRelationInput | UserDiscordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDiscords.
     */
    cursor?: UserDiscordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiscords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiscords.
     */
    skip?: number
    distinct?: UserDiscordScalarFieldEnum | UserDiscordScalarFieldEnum[]
  }

  /**
   * UserDiscord create
   */
  export type UserDiscordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDiscord.
     */
    data: XOR<UserDiscordCreateInput, UserDiscordUncheckedCreateInput>
  }

  /**
   * UserDiscord createMany
   */
  export type UserDiscordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDiscords.
     */
    data: UserDiscordCreateManyInput | UserDiscordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDiscord createManyAndReturn
   */
  export type UserDiscordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * The data used to create many UserDiscords.
     */
    data: UserDiscordCreateManyInput | UserDiscordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDiscord update
   */
  export type UserDiscordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDiscord.
     */
    data: XOR<UserDiscordUpdateInput, UserDiscordUncheckedUpdateInput>
    /**
     * Choose, which UserDiscord to update.
     */
    where: UserDiscordWhereUniqueInput
  }

  /**
   * UserDiscord updateMany
   */
  export type UserDiscordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDiscords.
     */
    data: XOR<UserDiscordUpdateManyMutationInput, UserDiscordUncheckedUpdateManyInput>
    /**
     * Filter which UserDiscords to update
     */
    where?: UserDiscordWhereInput
    /**
     * Limit how many UserDiscords to update.
     */
    limit?: number
  }

  /**
   * UserDiscord updateManyAndReturn
   */
  export type UserDiscordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * The data used to update UserDiscords.
     */
    data: XOR<UserDiscordUpdateManyMutationInput, UserDiscordUncheckedUpdateManyInput>
    /**
     * Filter which UserDiscords to update
     */
    where?: UserDiscordWhereInput
    /**
     * Limit how many UserDiscords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDiscord upsert
   */
  export type UserDiscordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDiscord to update in case it exists.
     */
    where: UserDiscordWhereUniqueInput
    /**
     * In case the UserDiscord found by the `where` argument doesn't exist, create a new UserDiscord with this data.
     */
    create: XOR<UserDiscordCreateInput, UserDiscordUncheckedCreateInput>
    /**
     * In case the UserDiscord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDiscordUpdateInput, UserDiscordUncheckedUpdateInput>
  }

  /**
   * UserDiscord delete
   */
  export type UserDiscordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
    /**
     * Filter which UserDiscord to delete.
     */
    where: UserDiscordWhereUniqueInput
  }

  /**
   * UserDiscord deleteMany
   */
  export type UserDiscordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDiscords to delete
     */
    where?: UserDiscordWhereInput
    /**
     * Limit how many UserDiscords to delete.
     */
    limit?: number
  }

  /**
   * UserDiscord without action
   */
  export type UserDiscordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscord
     */
    select?: UserDiscordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscord
     */
    omit?: UserDiscordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscordInclude<ExtArgs> | null
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


  export const AnswerScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId',
    questionId: 'questionId',
    isAnswerCorrect: 'isAnswerCorrect',
    createdAt: 'createdAt',
    selectedOption: 'selectedOption'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const AnswerOutboxScalarFieldEnum: {
    id: 'id',
    answerId: 'answerId'
  };

  export type AnswerOutboxScalarFieldEnum = (typeof AnswerOutboxScalarFieldEnum)[keyof typeof AnswerOutboxScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    joinedAt: 'joinedAt',
    isConnected: 'isConnected',
    isBanned: 'isBanned'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const ParticipantResultScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId',
    quizId: 'quizId',
    score: 'score',
    rank: 'rank',
    createdAt: 'createdAt'
  };

  export type ParticipantResultScalarFieldEnum = (typeof ParticipantResultScalarFieldEnum)[keyof typeof ParticipantResultScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    questionText: 'questionText',
    questionIndex: 'questionIndex',
    options: 'options',
    quizId: 'quizId',
    creatorId: 'creatorId',
    correctOption: 'correctOption',
    CorrectAnswerPercentage: 'CorrectAnswerPercentage'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    title: 'title',
    description: 'description',
    status: 'status',
    currentQuestionIndex: 'currentQuestionIndex',
    timePerQuestion: 'timePerQuestion',
    createdAt: 'createdAt',
    maxParticipants: 'maxParticipants',
    totalParticipants: 'totalParticipants',
    isResultCalculated: 'isResultCalculated',
    avgScore: 'avgScore',
    lowestScore: 'lowestScore',
    resultSentViaMail: 'resultSentViaMail',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizResultQueueScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId'
  };

  export type QuizResultQueueScalarFieldEnum = (typeof QuizResultQueueScalarFieldEnum)[keyof typeof QuizResultQueueScalarFieldEnum]


  export const QuizResultQueueOutboxScalarFieldEnum: {
    id: 'id',
    quizResultQueueId: 'quizResultQueueId'
  };

  export type QuizResultQueueOutboxScalarFieldEnum = (typeof QuizResultQueueOutboxScalarFieldEnum)[keyof typeof QuizResultQueueOutboxScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    brand: 'brand',
    voucherCode: 'voucherCode'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const ScoreDistributionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    count: 'count',
    label: 'label'
  };

  export type ScoreDistributionScalarFieldEnum = (typeof ScoreDistributionScalarFieldEnum)[keyof typeof ScoreDistributionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    mailVerified: 'mailVerified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserDiscordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    discordId: 'discordId',
    discordUsername: 'discordUsername',
    discordDiscriminator: 'discordDiscriminator',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    connectedAt: 'connectedAt'
  };

  export type UserDiscordScalarFieldEnum = (typeof UserDiscordScalarFieldEnum)[keyof typeof UserDiscordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'QuizStatus'
   */
  export type EnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus'>
    


  /**
   * Reference to a field of type 'QuizStatus[]'
   */
  export type ListEnumQuizStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizStatus[]'>
    


  /**
   * Reference to a field of type 'RewardBrands'
   */
  export type EnumRewardBrandsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardBrands'>
    


  /**
   * Reference to a field of type 'RewardBrands[]'
   */
  export type ListEnumRewardBrandsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardBrands[]'>
    
  /**
   * Deep Input Types
   */


  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    participantId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    isAnswerCorrect?: BoolNullableFilter<"Answer"> | boolean | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    selectedOption?: IntFilter<"Answer"> | number
    Participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    Question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    AnswerOutbox?: XOR<AnswerOutboxNullableScalarRelationFilter, AnswerOutboxWhereInput> | null
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    isAnswerCorrect?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    selectedOption?: SortOrder
    Participant?: ParticipantOrderByWithRelationInput
    Question?: QuestionOrderByWithRelationInput
    AnswerOutbox?: AnswerOutboxOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    participantId_questionId?: AnswerParticipantIdQuestionIdCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    participantId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    isAnswerCorrect?: BoolNullableFilter<"Answer"> | boolean | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    selectedOption?: IntFilter<"Answer"> | number
    Participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    Question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    AnswerOutbox?: XOR<AnswerOutboxNullableScalarRelationFilter, AnswerOutboxWhereInput> | null
  }, "id" | "participantId_questionId">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    isAnswerCorrect?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    selectedOption?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    participantId?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    isAnswerCorrect?: BoolNullableWithAggregatesFilter<"Answer"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
    selectedOption?: IntWithAggregatesFilter<"Answer"> | number
  }

  export type AnswerOutboxWhereInput = {
    AND?: AnswerOutboxWhereInput | AnswerOutboxWhereInput[]
    OR?: AnswerOutboxWhereInput[]
    NOT?: AnswerOutboxWhereInput | AnswerOutboxWhereInput[]
    id?: StringFilter<"AnswerOutbox"> | string
    answerId?: StringFilter<"AnswerOutbox"> | string
    Answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
  }

  export type AnswerOutboxOrderByWithRelationInput = {
    id?: SortOrder
    answerId?: SortOrder
    Answer?: AnswerOrderByWithRelationInput
  }

  export type AnswerOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    answerId?: string
    AND?: AnswerOutboxWhereInput | AnswerOutboxWhereInput[]
    OR?: AnswerOutboxWhereInput[]
    NOT?: AnswerOutboxWhereInput | AnswerOutboxWhereInput[]
    Answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
  }, "id" | "answerId">

  export type AnswerOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    answerId?: SortOrder
    _count?: AnswerOutboxCountOrderByAggregateInput
    _max?: AnswerOutboxMaxOrderByAggregateInput
    _min?: AnswerOutboxMinOrderByAggregateInput
  }

  export type AnswerOutboxScalarWhereWithAggregatesInput = {
    AND?: AnswerOutboxScalarWhereWithAggregatesInput | AnswerOutboxScalarWhereWithAggregatesInput[]
    OR?: AnswerOutboxScalarWhereWithAggregatesInput[]
    NOT?: AnswerOutboxScalarWhereWithAggregatesInput | AnswerOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnswerOutbox"> | string
    answerId?: StringWithAggregatesFilter<"AnswerOutbox"> | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: StringFilter<"Participant"> | string
    userId?: StringFilter<"Participant"> | string
    quizId?: StringFilter<"Participant"> | string
    joinedAt?: DateTimeFilter<"Participant"> | Date | string
    isConnected?: BoolFilter<"Participant"> | boolean
    isBanned?: BoolFilter<"Participant"> | boolean
    Answer?: AnswerListRelationFilter
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ParticipantResult?: XOR<ParticipantResultNullableScalarRelationFilter, ParticipantResultWhereInput> | null
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    joinedAt?: SortOrder
    isConnected?: SortOrder
    isBanned?: SortOrder
    Answer?: AnswerOrderByRelationAggregateInput
    Quiz?: QuizOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    ParticipantResult?: ParticipantResultOrderByWithRelationInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_quizId?: ParticipantUserIdQuizIdCompoundUniqueInput
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    userId?: StringFilter<"Participant"> | string
    quizId?: StringFilter<"Participant"> | string
    joinedAt?: DateTimeFilter<"Participant"> | Date | string
    isConnected?: BoolFilter<"Participant"> | boolean
    isBanned?: BoolFilter<"Participant"> | boolean
    Answer?: AnswerListRelationFilter
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ParticipantResult?: XOR<ParticipantResultNullableScalarRelationFilter, ParticipantResultWhereInput> | null
  }, "id" | "userId_quizId">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    joinedAt?: SortOrder
    isConnected?: SortOrder
    isBanned?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participant"> | string
    userId?: StringWithAggregatesFilter<"Participant"> | string
    quizId?: StringWithAggregatesFilter<"Participant"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
    isConnected?: BoolWithAggregatesFilter<"Participant"> | boolean
    isBanned?: BoolWithAggregatesFilter<"Participant"> | boolean
  }

  export type ParticipantResultWhereInput = {
    AND?: ParticipantResultWhereInput | ParticipantResultWhereInput[]
    OR?: ParticipantResultWhereInput[]
    NOT?: ParticipantResultWhereInput | ParticipantResultWhereInput[]
    id?: StringFilter<"ParticipantResult"> | string
    participantId?: StringFilter<"ParticipantResult"> | string
    quizId?: StringFilter<"ParticipantResult"> | string
    score?: IntFilter<"ParticipantResult"> | number
    rank?: IntFilter<"ParticipantResult"> | number
    createdAt?: DateTimeFilter<"ParticipantResult"> | Date | string
    Participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type ParticipantResultOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    Participant?: ParticipantOrderByWithRelationInput
    Quiz?: QuizOrderByWithRelationInput
  }

  export type ParticipantResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    participantId?: string
    participantId_quizId?: ParticipantResultParticipantIdQuizIdCompoundUniqueInput
    AND?: ParticipantResultWhereInput | ParticipantResultWhereInput[]
    OR?: ParticipantResultWhereInput[]
    NOT?: ParticipantResultWhereInput | ParticipantResultWhereInput[]
    quizId?: StringFilter<"ParticipantResult"> | string
    score?: IntFilter<"ParticipantResult"> | number
    rank?: IntFilter<"ParticipantResult"> | number
    createdAt?: DateTimeFilter<"ParticipantResult"> | Date | string
    Participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "participantId" | "participantId_quizId">

  export type ParticipantResultOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    _count?: ParticipantResultCountOrderByAggregateInput
    _avg?: ParticipantResultAvgOrderByAggregateInput
    _max?: ParticipantResultMaxOrderByAggregateInput
    _min?: ParticipantResultMinOrderByAggregateInput
    _sum?: ParticipantResultSumOrderByAggregateInput
  }

  export type ParticipantResultScalarWhereWithAggregatesInput = {
    AND?: ParticipantResultScalarWhereWithAggregatesInput | ParticipantResultScalarWhereWithAggregatesInput[]
    OR?: ParticipantResultScalarWhereWithAggregatesInput[]
    NOT?: ParticipantResultScalarWhereWithAggregatesInput | ParticipantResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParticipantResult"> | string
    participantId?: StringWithAggregatesFilter<"ParticipantResult"> | string
    quizId?: StringWithAggregatesFilter<"ParticipantResult"> | string
    score?: IntWithAggregatesFilter<"ParticipantResult"> | number
    rank?: IntWithAggregatesFilter<"ParticipantResult"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ParticipantResult"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    questionIndex?: IntFilter<"Question"> | number
    options?: JsonFilter<"Question">
    quizId?: StringFilter<"Question"> | string
    creatorId?: StringFilter<"Question"> | string
    correctOption?: IntFilter<"Question"> | number
    CorrectAnswerPercentage?: FloatFilter<"Question"> | number
    Answer?: AnswerListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    questionText?: SortOrder
    questionIndex?: SortOrder
    options?: SortOrder
    quizId?: SortOrder
    creatorId?: SortOrder
    correctOption?: SortOrder
    CorrectAnswerPercentage?: SortOrder
    Answer?: AnswerOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    Quiz?: QuizOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quizId_questionIndex?: QuestionQuizIdQuestionIndexCompoundUniqueInput
    quizId_questionText?: QuestionQuizIdQuestionTextCompoundUniqueInput
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    questionText?: StringFilter<"Question"> | string
    questionIndex?: IntFilter<"Question"> | number
    options?: JsonFilter<"Question">
    quizId?: StringFilter<"Question"> | string
    creatorId?: StringFilter<"Question"> | string
    correctOption?: IntFilter<"Question"> | number
    CorrectAnswerPercentage?: FloatFilter<"Question"> | number
    Answer?: AnswerListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "quizId_questionIndex" | "quizId_questionText">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    questionText?: SortOrder
    questionIndex?: SortOrder
    options?: SortOrder
    quizId?: SortOrder
    creatorId?: SortOrder
    correctOption?: SortOrder
    CorrectAnswerPercentage?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    questionText?: StringWithAggregatesFilter<"Question"> | string
    questionIndex?: IntWithAggregatesFilter<"Question"> | number
    options?: JsonWithAggregatesFilter<"Question">
    quizId?: StringWithAggregatesFilter<"Question"> | string
    creatorId?: StringWithAggregatesFilter<"Question"> | string
    correctOption?: IntWithAggregatesFilter<"Question"> | number
    CorrectAnswerPercentage?: FloatWithAggregatesFilter<"Question"> | number
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    creatorId?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    status?: EnumQuizStatusFilter<"Quiz"> | $Enums.QuizStatus
    currentQuestionIndex?: IntFilter<"Quiz"> | number
    timePerQuestion?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    maxParticipants?: IntFilter<"Quiz"> | number
    totalParticipants?: IntFilter<"Quiz"> | number
    isResultCalculated?: BoolFilter<"Quiz"> | boolean
    avgScore?: IntFilter<"Quiz"> | number
    lowestScore?: IntFilter<"Quiz"> | number
    resultSentViaMail?: BoolFilter<"Quiz"> | boolean
    startedAt?: DateTimeFilter<"Quiz"> | Date | string
    endedAt?: DateTimeFilter<"Quiz"> | Date | string
    Participant?: ParticipantListRelationFilter
    ParticipantResult?: ParticipantResultListRelationFilter
    Question?: QuestionListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    QuizResultQueue?: QuizResultQueueListRelationFilter
    Reward?: XOR<RewardNullableScalarRelationFilter, RewardWhereInput> | null
    ScoreDistribution?: ScoreDistributionListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    currentQuestionIndex?: SortOrder
    timePerQuestion?: SortOrder
    createdAt?: SortOrder
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
    isResultCalculated?: SortOrder
    avgScore?: SortOrder
    lowestScore?: SortOrder
    resultSentViaMail?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    Participant?: ParticipantOrderByRelationAggregateInput
    ParticipantResult?: ParticipantResultOrderByRelationAggregateInput
    Question?: QuestionOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    QuizResultQueue?: QuizResultQueueOrderByRelationAggregateInput
    Reward?: RewardOrderByWithRelationInput
    ScoreDistribution?: ScoreDistributionOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    creatorId?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    status?: EnumQuizStatusFilter<"Quiz"> | $Enums.QuizStatus
    currentQuestionIndex?: IntFilter<"Quiz"> | number
    timePerQuestion?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    maxParticipants?: IntFilter<"Quiz"> | number
    totalParticipants?: IntFilter<"Quiz"> | number
    isResultCalculated?: BoolFilter<"Quiz"> | boolean
    avgScore?: IntFilter<"Quiz"> | number
    lowestScore?: IntFilter<"Quiz"> | number
    resultSentViaMail?: BoolFilter<"Quiz"> | boolean
    startedAt?: DateTimeFilter<"Quiz"> | Date | string
    endedAt?: DateTimeFilter<"Quiz"> | Date | string
    Participant?: ParticipantListRelationFilter
    ParticipantResult?: ParticipantResultListRelationFilter
    Question?: QuestionListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    QuizResultQueue?: QuizResultQueueListRelationFilter
    Reward?: XOR<RewardNullableScalarRelationFilter, RewardWhereInput> | null
    ScoreDistribution?: ScoreDistributionListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    currentQuestionIndex?: SortOrder
    timePerQuestion?: SortOrder
    createdAt?: SortOrder
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
    isResultCalculated?: SortOrder
    avgScore?: SortOrder
    lowestScore?: SortOrder
    resultSentViaMail?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    creatorId?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringWithAggregatesFilter<"Quiz"> | string
    description?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    status?: EnumQuizStatusWithAggregatesFilter<"Quiz"> | $Enums.QuizStatus
    currentQuestionIndex?: IntWithAggregatesFilter<"Quiz"> | number
    timePerQuestion?: IntWithAggregatesFilter<"Quiz"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    maxParticipants?: IntWithAggregatesFilter<"Quiz"> | number
    totalParticipants?: IntWithAggregatesFilter<"Quiz"> | number
    isResultCalculated?: BoolWithAggregatesFilter<"Quiz"> | boolean
    avgScore?: IntWithAggregatesFilter<"Quiz"> | number
    lowestScore?: IntWithAggregatesFilter<"Quiz"> | number
    resultSentViaMail?: BoolWithAggregatesFilter<"Quiz"> | boolean
    startedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    endedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type QuizResultQueueWhereInput = {
    AND?: QuizResultQueueWhereInput | QuizResultQueueWhereInput[]
    OR?: QuizResultQueueWhereInput[]
    NOT?: QuizResultQueueWhereInput | QuizResultQueueWhereInput[]
    id?: StringFilter<"QuizResultQueue"> | string
    quizId?: StringFilter<"QuizResultQueue"> | string
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    QuizResultQueueOutbox?: XOR<QuizResultQueueOutboxNullableScalarRelationFilter, QuizResultQueueOutboxWhereInput> | null
  }

  export type QuizResultQueueOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    Quiz?: QuizOrderByWithRelationInput
    QuizResultQueueOutbox?: QuizResultQueueOutboxOrderByWithRelationInput
  }

  export type QuizResultQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizResultQueueWhereInput | QuizResultQueueWhereInput[]
    OR?: QuizResultQueueWhereInput[]
    NOT?: QuizResultQueueWhereInput | QuizResultQueueWhereInput[]
    quizId?: StringFilter<"QuizResultQueue"> | string
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    QuizResultQueueOutbox?: XOR<QuizResultQueueOutboxNullableScalarRelationFilter, QuizResultQueueOutboxWhereInput> | null
  }, "id">

  export type QuizResultQueueOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    _count?: QuizResultQueueCountOrderByAggregateInput
    _max?: QuizResultQueueMaxOrderByAggregateInput
    _min?: QuizResultQueueMinOrderByAggregateInput
  }

  export type QuizResultQueueScalarWhereWithAggregatesInput = {
    AND?: QuizResultQueueScalarWhereWithAggregatesInput | QuizResultQueueScalarWhereWithAggregatesInput[]
    OR?: QuizResultQueueScalarWhereWithAggregatesInput[]
    NOT?: QuizResultQueueScalarWhereWithAggregatesInput | QuizResultQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizResultQueue"> | string
    quizId?: StringWithAggregatesFilter<"QuizResultQueue"> | string
  }

  export type QuizResultQueueOutboxWhereInput = {
    AND?: QuizResultQueueOutboxWhereInput | QuizResultQueueOutboxWhereInput[]
    OR?: QuizResultQueueOutboxWhereInput[]
    NOT?: QuizResultQueueOutboxWhereInput | QuizResultQueueOutboxWhereInput[]
    id?: StringFilter<"QuizResultQueueOutbox"> | string
    quizResultQueueId?: StringFilter<"QuizResultQueueOutbox"> | string
    QuizResultQueue?: XOR<QuizResultQueueScalarRelationFilter, QuizResultQueueWhereInput>
  }

  export type QuizResultQueueOutboxOrderByWithRelationInput = {
    id?: SortOrder
    quizResultQueueId?: SortOrder
    QuizResultQueue?: QuizResultQueueOrderByWithRelationInput
  }

  export type QuizResultQueueOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quizResultQueueId?: string
    AND?: QuizResultQueueOutboxWhereInput | QuizResultQueueOutboxWhereInput[]
    OR?: QuizResultQueueOutboxWhereInput[]
    NOT?: QuizResultQueueOutboxWhereInput | QuizResultQueueOutboxWhereInput[]
    QuizResultQueue?: XOR<QuizResultQueueScalarRelationFilter, QuizResultQueueWhereInput>
  }, "id" | "quizResultQueueId">

  export type QuizResultQueueOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    quizResultQueueId?: SortOrder
    _count?: QuizResultQueueOutboxCountOrderByAggregateInput
    _max?: QuizResultQueueOutboxMaxOrderByAggregateInput
    _min?: QuizResultQueueOutboxMinOrderByAggregateInput
  }

  export type QuizResultQueueOutboxScalarWhereWithAggregatesInput = {
    AND?: QuizResultQueueOutboxScalarWhereWithAggregatesInput | QuizResultQueueOutboxScalarWhereWithAggregatesInput[]
    OR?: QuizResultQueueOutboxScalarWhereWithAggregatesInput[]
    NOT?: QuizResultQueueOutboxScalarWhereWithAggregatesInput | QuizResultQueueOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizResultQueueOutbox"> | string
    quizResultQueueId?: StringWithAggregatesFilter<"QuizResultQueueOutbox"> | string
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: StringFilter<"Reward"> | string
    quizId?: StringFilter<"Reward"> | string
    brand?: EnumRewardBrandsFilter<"Reward"> | $Enums.RewardBrands
    voucherCode?: StringFilter<"Reward"> | string
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    brand?: SortOrder
    voucherCode?: SortOrder
    Quiz?: QuizOrderByWithRelationInput
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quizId?: string
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    brand?: EnumRewardBrandsFilter<"Reward"> | $Enums.RewardBrands
    voucherCode?: StringFilter<"Reward"> | string
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "quizId">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    brand?: SortOrder
    voucherCode?: SortOrder
    _count?: RewardCountOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reward"> | string
    quizId?: StringWithAggregatesFilter<"Reward"> | string
    brand?: EnumRewardBrandsWithAggregatesFilter<"Reward"> | $Enums.RewardBrands
    voucherCode?: StringWithAggregatesFilter<"Reward"> | string
  }

  export type ScoreDistributionWhereInput = {
    AND?: ScoreDistributionWhereInput | ScoreDistributionWhereInput[]
    OR?: ScoreDistributionWhereInput[]
    NOT?: ScoreDistributionWhereInput | ScoreDistributionWhereInput[]
    id?: StringFilter<"ScoreDistribution"> | string
    quizId?: StringFilter<"ScoreDistribution"> | string
    count?: IntFilter<"ScoreDistribution"> | number
    label?: StringFilter<"ScoreDistribution"> | string
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type ScoreDistributionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    count?: SortOrder
    label?: SortOrder
    Quiz?: QuizOrderByWithRelationInput
  }

  export type ScoreDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quizId_label?: ScoreDistributionQuizIdLabelCompoundUniqueInput
    AND?: ScoreDistributionWhereInput | ScoreDistributionWhereInput[]
    OR?: ScoreDistributionWhereInput[]
    NOT?: ScoreDistributionWhereInput | ScoreDistributionWhereInput[]
    quizId?: StringFilter<"ScoreDistribution"> | string
    count?: IntFilter<"ScoreDistribution"> | number
    label?: StringFilter<"ScoreDistribution"> | string
    Quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id" | "quizId_label">

  export type ScoreDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    count?: SortOrder
    label?: SortOrder
    _count?: ScoreDistributionCountOrderByAggregateInput
    _avg?: ScoreDistributionAvgOrderByAggregateInput
    _max?: ScoreDistributionMaxOrderByAggregateInput
    _min?: ScoreDistributionMinOrderByAggregateInput
    _sum?: ScoreDistributionSumOrderByAggregateInput
  }

  export type ScoreDistributionScalarWhereWithAggregatesInput = {
    AND?: ScoreDistributionScalarWhereWithAggregatesInput | ScoreDistributionScalarWhereWithAggregatesInput[]
    OR?: ScoreDistributionScalarWhereWithAggregatesInput[]
    NOT?: ScoreDistributionScalarWhereWithAggregatesInput | ScoreDistributionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoreDistribution"> | string
    quizId?: StringWithAggregatesFilter<"ScoreDistribution"> | string
    count?: IntWithAggregatesFilter<"ScoreDistribution"> | number
    label?: StringWithAggregatesFilter<"ScoreDistribution"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    mailVerified?: BoolFilter<"User"> | boolean
    Participant?: ParticipantListRelationFilter
    Question?: QuestionListRelationFilter
    Quiz?: QuizListRelationFilter
    UserDiscord?: XOR<UserDiscordNullableScalarRelationFilter, UserDiscordWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mailVerified?: SortOrder
    Participant?: ParticipantOrderByRelationAggregateInput
    Question?: QuestionOrderByRelationAggregateInput
    Quiz?: QuizOrderByRelationAggregateInput
    UserDiscord?: UserDiscordOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    mailVerified?: BoolFilter<"User"> | boolean
    Participant?: ParticipantListRelationFilter
    Question?: QuestionListRelationFilter
    Quiz?: QuizListRelationFilter
    UserDiscord?: XOR<UserDiscordNullableScalarRelationFilter, UserDiscordWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mailVerified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    mailVerified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type UserDiscordWhereInput = {
    AND?: UserDiscordWhereInput | UserDiscordWhereInput[]
    OR?: UserDiscordWhereInput[]
    NOT?: UserDiscordWhereInput | UserDiscordWhereInput[]
    id?: StringFilter<"UserDiscord"> | string
    userId?: StringFilter<"UserDiscord"> | string
    discordId?: StringFilter<"UserDiscord"> | string
    discordUsername?: StringFilter<"UserDiscord"> | string
    discordDiscriminator?: StringFilter<"UserDiscord"> | string
    accessToken?: StringFilter<"UserDiscord"> | string
    refreshToken?: StringFilter<"UserDiscord"> | string
    connectedAt?: DateTimeFilter<"UserDiscord"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDiscordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    discordId?: SortOrder
    discordUsername?: SortOrder
    discordDiscriminator?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    connectedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserDiscordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    discordId?: string
    discordUsername?: string
    AND?: UserDiscordWhereInput | UserDiscordWhereInput[]
    OR?: UserDiscordWhereInput[]
    NOT?: UserDiscordWhereInput | UserDiscordWhereInput[]
    discordDiscriminator?: StringFilter<"UserDiscord"> | string
    accessToken?: StringFilter<"UserDiscord"> | string
    refreshToken?: StringFilter<"UserDiscord"> | string
    connectedAt?: DateTimeFilter<"UserDiscord"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "discordId" | "discordUsername">

  export type UserDiscordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    discordId?: SortOrder
    discordUsername?: SortOrder
    discordDiscriminator?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    connectedAt?: SortOrder
    _count?: UserDiscordCountOrderByAggregateInput
    _max?: UserDiscordMaxOrderByAggregateInput
    _min?: UserDiscordMinOrderByAggregateInput
  }

  export type UserDiscordScalarWhereWithAggregatesInput = {
    AND?: UserDiscordScalarWhereWithAggregatesInput | UserDiscordScalarWhereWithAggregatesInput[]
    OR?: UserDiscordScalarWhereWithAggregatesInput[]
    NOT?: UserDiscordScalarWhereWithAggregatesInput | UserDiscordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDiscord"> | string
    userId?: StringWithAggregatesFilter<"UserDiscord"> | string
    discordId?: StringWithAggregatesFilter<"UserDiscord"> | string
    discordUsername?: StringWithAggregatesFilter<"UserDiscord"> | string
    discordDiscriminator?: StringWithAggregatesFilter<"UserDiscord"> | string
    accessToken?: StringWithAggregatesFilter<"UserDiscord"> | string
    refreshToken?: StringWithAggregatesFilter<"UserDiscord"> | string
    connectedAt?: DateTimeWithAggregatesFilter<"UserDiscord"> | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
    Participant: ParticipantCreateNestedOneWithoutAnswerInput
    Question: QuestionCreateNestedOneWithoutAnswerInput
    AnswerOutbox?: AnswerOutboxCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    participantId: string
    questionId: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
    AnswerOutbox?: AnswerOutboxUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
    Participant?: ParticipantUpdateOneRequiredWithoutAnswerNestedInput
    Question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    AnswerOutbox?: AnswerOutboxUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
    AnswerOutbox?: AnswerOutboxUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: string
    participantId: string
    questionId: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerOutboxCreateInput = {
    id?: string
    Answer: AnswerCreateNestedOneWithoutAnswerOutboxInput
  }

  export type AnswerOutboxUncheckedCreateInput = {
    id?: string
    answerId: string
  }

  export type AnswerOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUpdateOneRequiredWithoutAnswerOutboxNestedInput
  }

  export type AnswerOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerOutboxCreateManyInput = {
    id?: string
    answerId: string
  }

  export type AnswerOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerId?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantCreateInput = {
    id?: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Answer?: AnswerCreateNestedManyWithoutParticipantInput
    Quiz: QuizCreateNestedOneWithoutParticipantInput
    User: UserCreateNestedOneWithoutParticipantInput
    ParticipantResult?: ParticipantResultCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    userId: string
    quizId: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Answer?: AnswerUncheckedCreateNestedManyWithoutParticipantInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Answer?: AnswerUpdateManyWithoutParticipantNestedInput
    Quiz?: QuizUpdateOneRequiredWithoutParticipantNestedInput
    User?: UserUpdateOneRequiredWithoutParticipantNestedInput
    ParticipantResult?: ParticipantResultUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Answer?: AnswerUncheckedUpdateManyWithoutParticipantNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantCreateManyInput = {
    id?: string
    userId: string
    quizId: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParticipantResultCreateInput = {
    id?: string
    score: number
    rank: number
    createdAt?: Date | string
    Participant: ParticipantCreateNestedOneWithoutParticipantResultInput
    Quiz: QuizCreateNestedOneWithoutParticipantResultInput
  }

  export type ParticipantResultUncheckedCreateInput = {
    id?: string
    participantId: string
    quizId: string
    score: number
    rank: number
    createdAt?: Date | string
  }

  export type ParticipantResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateOneRequiredWithoutParticipantResultNestedInput
    Quiz?: QuizUpdateOneRequiredWithoutParticipantResultNestedInput
  }

  export type ParticipantResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantResultCreateManyInput = {
    id?: string
    participantId: string
    quizId: string
    score: number
    rank: number
    createdAt?: Date | string
  }

  export type ParticipantResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    correctOption: number
    CorrectAnswerPercentage?: number
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
    User: UserCreateNestedOneWithoutQuestionInput
    Quiz: QuizCreateNestedOneWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    quizId: string
    creatorId: string
    correctOption: number
    CorrectAnswerPercentage?: number
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
    User?: UserUpdateOneRequiredWithoutQuestionNestedInput
    Quiz?: QuizUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    quizId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    quizId: string
    creatorId: string
    correctOption: number
    CorrectAnswerPercentage?: number
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    quizId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type QuizCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultCreateNestedManyWithoutQuizInput
    Question?: QuestionCreateNestedManyWithoutQuizInput
    User: UserCreateNestedOneWithoutQuizInput
    QuizResultQueue?: QuizResultQueueCreateNestedManyWithoutQuizInput
    Reward?: RewardCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantUncheckedCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedManyWithoutQuizInput
    Question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    QuizResultQueue?: QuizResultQueueUncheckedCreateNestedManyWithoutQuizInput
    Reward?: RewardUncheckedCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUpdateManyWithoutQuizNestedInput
    Question?: QuestionUpdateManyWithoutQuizNestedInput
    User?: UserUpdateOneRequiredWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUpdateManyWithoutQuizNestedInput
    Reward?: RewardUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUncheckedUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateManyWithoutQuizNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUncheckedUpdateManyWithoutQuizNestedInput
    Reward?: RewardUncheckedUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultQueueCreateInput = {
    id?: string
    Quiz: QuizCreateNestedOneWithoutQuizResultQueueInput
    QuizResultQueueOutbox?: QuizResultQueueOutboxCreateNestedOneWithoutQuizResultQueueInput
  }

  export type QuizResultQueueUncheckedCreateInput = {
    id?: string
    quizId: string
    QuizResultQueueOutbox?: QuizResultQueueOutboxUncheckedCreateNestedOneWithoutQuizResultQueueInput
  }

  export type QuizResultQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Quiz?: QuizUpdateOneRequiredWithoutQuizResultQueueNestedInput
    QuizResultQueueOutbox?: QuizResultQueueOutboxUpdateOneWithoutQuizResultQueueNestedInput
  }

  export type QuizResultQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    QuizResultQueueOutbox?: QuizResultQueueOutboxUncheckedUpdateOneWithoutQuizResultQueueNestedInput
  }

  export type QuizResultQueueCreateManyInput = {
    id?: string
    quizId: string
  }

  export type QuizResultQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultQueueOutboxCreateInput = {
    id?: string
    QuizResultQueue: QuizResultQueueCreateNestedOneWithoutQuizResultQueueOutboxInput
  }

  export type QuizResultQueueOutboxUncheckedCreateInput = {
    id?: string
    quizResultQueueId: string
  }

  export type QuizResultQueueOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    QuizResultQueue?: QuizResultQueueUpdateOneRequiredWithoutQuizResultQueueOutboxNestedInput
  }

  export type QuizResultQueueOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizResultQueueId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultQueueOutboxCreateManyInput = {
    id?: string
    quizResultQueueId: string
  }

  export type QuizResultQueueOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultQueueOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizResultQueueId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardCreateInput = {
    id?: string
    brand: $Enums.RewardBrands
    voucherCode: string
    Quiz: QuizCreateNestedOneWithoutRewardInput
  }

  export type RewardUncheckedCreateInput = {
    id?: string
    quizId: string
    brand: $Enums.RewardBrands
    voucherCode: string
  }

  export type RewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: EnumRewardBrandsFieldUpdateOperationsInput | $Enums.RewardBrands
    voucherCode?: StringFieldUpdateOperationsInput | string
    Quiz?: QuizUpdateOneRequiredWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    brand?: EnumRewardBrandsFieldUpdateOperationsInput | $Enums.RewardBrands
    voucherCode?: StringFieldUpdateOperationsInput | string
  }

  export type RewardCreateManyInput = {
    id?: string
    quizId: string
    brand: $Enums.RewardBrands
    voucherCode: string
  }

  export type RewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: EnumRewardBrandsFieldUpdateOperationsInput | $Enums.RewardBrands
    voucherCode?: StringFieldUpdateOperationsInput | string
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    brand?: EnumRewardBrandsFieldUpdateOperationsInput | $Enums.RewardBrands
    voucherCode?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreDistributionCreateInput = {
    id?: string
    count: number
    label: string
    Quiz: QuizCreateNestedOneWithoutScoreDistributionInput
  }

  export type ScoreDistributionUncheckedCreateInput = {
    id?: string
    quizId: string
    count: number
    label: string
  }

  export type ScoreDistributionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    Quiz?: QuizUpdateOneRequiredWithoutScoreDistributionNestedInput
  }

  export type ScoreDistributionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreDistributionCreateManyInput = {
    id?: string
    quizId: string
    count: number
    label: string
  }

  export type ScoreDistributionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreDistributionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Participant?: ParticipantCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    Quiz?: QuizCreateNestedManyWithoutUserInput
    UserDiscord?: UserDiscordCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Participant?: ParticipantUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    Quiz?: QuizUncheckedCreateNestedManyWithoutUserInput
    UserDiscord?: UserDiscordUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Participant?: ParticipantUpdateManyWithoutUserNestedInput
    Question?: QuestionUpdateManyWithoutUserNestedInput
    Quiz?: QuizUpdateManyWithoutUserNestedInput
    UserDiscord?: UserDiscordUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Participant?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    Quiz?: QuizUncheckedUpdateManyWithoutUserNestedInput
    UserDiscord?: UserDiscordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserDiscordCreateInput = {
    id?: string
    discordId: string
    discordUsername: string
    discordDiscriminator: string
    accessToken: string
    refreshToken: string
    connectedAt?: Date | string
    User: UserCreateNestedOneWithoutUserDiscordInput
  }

  export type UserDiscordUncheckedCreateInput = {
    id?: string
    userId: string
    discordId: string
    discordUsername: string
    discordDiscriminator: string
    accessToken: string
    refreshToken: string
    connectedAt?: Date | string
  }

  export type UserDiscordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    discordUsername?: StringFieldUpdateOperationsInput | string
    discordDiscriminator?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserDiscordNestedInput
  }

  export type UserDiscordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    discordUsername?: StringFieldUpdateOperationsInput | string
    discordDiscriminator?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscordCreateManyInput = {
    id?: string
    userId: string
    discordId: string
    discordUsername: string
    discordDiscriminator: string
    accessToken: string
    refreshToken: string
    connectedAt?: Date | string
  }

  export type UserDiscordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    discordUsername?: StringFieldUpdateOperationsInput | string
    discordDiscriminator?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    discordUsername?: StringFieldUpdateOperationsInput | string
    discordDiscriminator?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerOutboxNullableScalarRelationFilter = {
    is?: AnswerOutboxWhereInput | null
    isNot?: AnswerOutboxWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnswerParticipantIdQuestionIdCompoundUniqueInput = {
    participantId: string
    questionId: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    isAnswerCorrect?: SortOrder
    createdAt?: SortOrder
    selectedOption?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    selectedOption?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    isAnswerCorrect?: SortOrder
    createdAt?: SortOrder
    selectedOption?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    questionId?: SortOrder
    isAnswerCorrect?: SortOrder
    createdAt?: SortOrder
    selectedOption?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    selectedOption?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type AnswerScalarRelationFilter = {
    is?: AnswerWhereInput
    isNot?: AnswerWhereInput
  }

  export type AnswerOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
  }

  export type AnswerOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
  }

  export type AnswerOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParticipantResultNullableScalarRelationFilter = {
    is?: ParticipantResultWhereInput | null
    isNot?: ParticipantResultWhereInput | null
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantUserIdQuizIdCompoundUniqueInput = {
    userId: string
    quizId: string
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    joinedAt?: SortOrder
    isConnected?: SortOrder
    isBanned?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    joinedAt?: SortOrder
    isConnected?: SortOrder
    isBanned?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    joinedAt?: SortOrder
    isConnected?: SortOrder
    isBanned?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParticipantResultParticipantIdQuizIdCompoundUniqueInput = {
    participantId: string
    quizId: string
  }

  export type ParticipantResultCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantResultAvgOrderByAggregateInput = {
    score?: SortOrder
    rank?: SortOrder
  }

  export type ParticipantResultMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantResultMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipantResultSumOrderByAggregateInput = {
    score?: SortOrder
    rank?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type QuestionQuizIdQuestionIndexCompoundUniqueInput = {
    quizId: string
    questionIndex: number
  }

  export type QuestionQuizIdQuestionTextCompoundUniqueInput = {
    quizId: string
    questionText: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    questionIndex?: SortOrder
    options?: SortOrder
    quizId?: SortOrder
    creatorId?: SortOrder
    correctOption?: SortOrder
    CorrectAnswerPercentage?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    questionIndex?: SortOrder
    correctOption?: SortOrder
    CorrectAnswerPercentage?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    questionIndex?: SortOrder
    quizId?: SortOrder
    creatorId?: SortOrder
    correctOption?: SortOrder
    CorrectAnswerPercentage?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    questionIndex?: SortOrder
    quizId?: SortOrder
    creatorId?: SortOrder
    correctOption?: SortOrder
    CorrectAnswerPercentage?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    questionIndex?: SortOrder
    correctOption?: SortOrder
    CorrectAnswerPercentage?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumQuizStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusFilter<$PrismaModel> | $Enums.QuizStatus
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type ParticipantResultListRelationFilter = {
    every?: ParticipantResultWhereInput
    some?: ParticipantResultWhereInput
    none?: ParticipantResultWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuizResultQueueListRelationFilter = {
    every?: QuizResultQueueWhereInput
    some?: QuizResultQueueWhereInput
    none?: QuizResultQueueWhereInput
  }

  export type RewardNullableScalarRelationFilter = {
    is?: RewardWhereInput | null
    isNot?: RewardWhereInput | null
  }

  export type ScoreDistributionListRelationFilter = {
    every?: ScoreDistributionWhereInput
    some?: ScoreDistributionWhereInput
    none?: ScoreDistributionWhereInput
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizResultQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoreDistributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    currentQuestionIndex?: SortOrder
    timePerQuestion?: SortOrder
    createdAt?: SortOrder
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
    isResultCalculated?: SortOrder
    avgScore?: SortOrder
    lowestScore?: SortOrder
    resultSentViaMail?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    currentQuestionIndex?: SortOrder
    timePerQuestion?: SortOrder
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
    avgScore?: SortOrder
    lowestScore?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    currentQuestionIndex?: SortOrder
    timePerQuestion?: SortOrder
    createdAt?: SortOrder
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
    isResultCalculated?: SortOrder
    avgScore?: SortOrder
    lowestScore?: SortOrder
    resultSentViaMail?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    currentQuestionIndex?: SortOrder
    timePerQuestion?: SortOrder
    createdAt?: SortOrder
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
    isResultCalculated?: SortOrder
    avgScore?: SortOrder
    lowestScore?: SortOrder
    resultSentViaMail?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    currentQuestionIndex?: SortOrder
    timePerQuestion?: SortOrder
    maxParticipants?: SortOrder
    totalParticipants?: SortOrder
    avgScore?: SortOrder
    lowestScore?: SortOrder
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

  export type EnumQuizStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuizStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizStatusFilter<$PrismaModel>
    _max?: NestedEnumQuizStatusFilter<$PrismaModel>
  }

  export type QuizResultQueueOutboxNullableScalarRelationFilter = {
    is?: QuizResultQueueOutboxWhereInput | null
    isNot?: QuizResultQueueOutboxWhereInput | null
  }

  export type QuizResultQueueCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type QuizResultQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type QuizResultQueueMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type QuizResultQueueScalarRelationFilter = {
    is?: QuizResultQueueWhereInput
    isNot?: QuizResultQueueWhereInput
  }

  export type QuizResultQueueOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    quizResultQueueId?: SortOrder
  }

  export type QuizResultQueueOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    quizResultQueueId?: SortOrder
  }

  export type QuizResultQueueOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    quizResultQueueId?: SortOrder
  }

  export type EnumRewardBrandsFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardBrands | EnumRewardBrandsFieldRefInput<$PrismaModel>
    in?: $Enums.RewardBrands[] | ListEnumRewardBrandsFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardBrands[] | ListEnumRewardBrandsFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardBrandsFilter<$PrismaModel> | $Enums.RewardBrands
  }

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    brand?: SortOrder
    voucherCode?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    brand?: SortOrder
    voucherCode?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    brand?: SortOrder
    voucherCode?: SortOrder
  }

  export type EnumRewardBrandsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardBrands | EnumRewardBrandsFieldRefInput<$PrismaModel>
    in?: $Enums.RewardBrands[] | ListEnumRewardBrandsFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardBrands[] | ListEnumRewardBrandsFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardBrandsWithAggregatesFilter<$PrismaModel> | $Enums.RewardBrands
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardBrandsFilter<$PrismaModel>
    _max?: NestedEnumRewardBrandsFilter<$PrismaModel>
  }

  export type ScoreDistributionQuizIdLabelCompoundUniqueInput = {
    quizId: string
    label: string
  }

  export type ScoreDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    count?: SortOrder
    label?: SortOrder
  }

  export type ScoreDistributionAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type ScoreDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    count?: SortOrder
    label?: SortOrder
  }

  export type ScoreDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    count?: SortOrder
    label?: SortOrder
  }

  export type ScoreDistributionSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type UserDiscordNullableScalarRelationFilter = {
    is?: UserDiscordWhereInput | null
    isNot?: UserDiscordWhereInput | null
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mailVerified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mailVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mailVerified?: SortOrder
  }

  export type UserDiscordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discordId?: SortOrder
    discordUsername?: SortOrder
    discordDiscriminator?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    connectedAt?: SortOrder
  }

  export type UserDiscordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discordId?: SortOrder
    discordUsername?: SortOrder
    discordDiscriminator?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    connectedAt?: SortOrder
  }

  export type UserDiscordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discordId?: SortOrder
    discordUsername?: SortOrder
    discordDiscriminator?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    connectedAt?: SortOrder
  }

  export type ParticipantCreateNestedOneWithoutAnswerInput = {
    create?: XOR<ParticipantCreateWithoutAnswerInput, ParticipantUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutAnswerInput
    connect?: ParticipantWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerOutboxCreateNestedOneWithoutAnswerInput = {
    create?: XOR<AnswerOutboxCreateWithoutAnswerInput, AnswerOutboxUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: AnswerOutboxCreateOrConnectWithoutAnswerInput
    connect?: AnswerOutboxWhereUniqueInput
  }

  export type AnswerOutboxUncheckedCreateNestedOneWithoutAnswerInput = {
    create?: XOR<AnswerOutboxCreateWithoutAnswerInput, AnswerOutboxUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: AnswerOutboxCreateOrConnectWithoutAnswerInput
    connect?: AnswerOutboxWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipantUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<ParticipantCreateWithoutAnswerInput, ParticipantUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutAnswerInput
    upsert?: ParticipantUpsertWithoutAnswerInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutAnswerInput, ParticipantUpdateWithoutAnswerInput>, ParticipantUncheckedUpdateWithoutAnswerInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    upsert?: QuestionUpsertWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswerInput, QuestionUpdateWithoutAnswerInput>, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerOutboxUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<AnswerOutboxCreateWithoutAnswerInput, AnswerOutboxUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: AnswerOutboxCreateOrConnectWithoutAnswerInput
    upsert?: AnswerOutboxUpsertWithoutAnswerInput
    disconnect?: AnswerOutboxWhereInput | boolean
    delete?: AnswerOutboxWhereInput | boolean
    connect?: AnswerOutboxWhereUniqueInput
    update?: XOR<XOR<AnswerOutboxUpdateToOneWithWhereWithoutAnswerInput, AnswerOutboxUpdateWithoutAnswerInput>, AnswerOutboxUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerOutboxUncheckedUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<AnswerOutboxCreateWithoutAnswerInput, AnswerOutboxUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: AnswerOutboxCreateOrConnectWithoutAnswerInput
    upsert?: AnswerOutboxUpsertWithoutAnswerInput
    disconnect?: AnswerOutboxWhereInput | boolean
    delete?: AnswerOutboxWhereInput | boolean
    connect?: AnswerOutboxWhereUniqueInput
    update?: XOR<XOR<AnswerOutboxUpdateToOneWithWhereWithoutAnswerInput, AnswerOutboxUpdateWithoutAnswerInput>, AnswerOutboxUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerCreateNestedOneWithoutAnswerOutboxInput = {
    create?: XOR<AnswerCreateWithoutAnswerOutboxInput, AnswerUncheckedCreateWithoutAnswerOutboxInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerOutboxInput
    connect?: AnswerWhereUniqueInput
  }

  export type AnswerUpdateOneRequiredWithoutAnswerOutboxNestedInput = {
    create?: XOR<AnswerCreateWithoutAnswerOutboxInput, AnswerUncheckedCreateWithoutAnswerOutboxInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutAnswerOutboxInput
    upsert?: AnswerUpsertWithoutAnswerOutboxInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutAnswerOutboxInput, AnswerUpdateWithoutAnswerOutboxInput>, AnswerUncheckedUpdateWithoutAnswerOutboxInput>
  }

  export type AnswerCreateNestedManyWithoutParticipantInput = {
    create?: XOR<AnswerCreateWithoutParticipantInput, AnswerUncheckedCreateWithoutParticipantInput> | AnswerCreateWithoutParticipantInput[] | AnswerUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutParticipantInput | AnswerCreateOrConnectWithoutParticipantInput[]
    createMany?: AnswerCreateManyParticipantInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuizCreateNestedOneWithoutParticipantInput = {
    create?: XOR<QuizCreateWithoutParticipantInput, QuizUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: QuizCreateOrConnectWithoutParticipantInput
    connect?: QuizWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipantInput = {
    create?: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantInput
    connect?: UserWhereUniqueInput
  }

  export type ParticipantResultCreateNestedOneWithoutParticipantInput = {
    create?: XOR<ParticipantResultCreateWithoutParticipantInput, ParticipantResultUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: ParticipantResultCreateOrConnectWithoutParticipantInput
    connect?: ParticipantResultWhereUniqueInput
  }

  export type AnswerUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<AnswerCreateWithoutParticipantInput, AnswerUncheckedCreateWithoutParticipantInput> | AnswerCreateWithoutParticipantInput[] | AnswerUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutParticipantInput | AnswerCreateOrConnectWithoutParticipantInput[]
    createMany?: AnswerCreateManyParticipantInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type ParticipantResultUncheckedCreateNestedOneWithoutParticipantInput = {
    create?: XOR<ParticipantResultCreateWithoutParticipantInput, ParticipantResultUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: ParticipantResultCreateOrConnectWithoutParticipantInput
    connect?: ParticipantResultWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnswerUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<AnswerCreateWithoutParticipantInput, AnswerUncheckedCreateWithoutParticipantInput> | AnswerCreateWithoutParticipantInput[] | AnswerUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutParticipantInput | AnswerCreateOrConnectWithoutParticipantInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutParticipantInput | AnswerUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: AnswerCreateManyParticipantInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutParticipantInput | AnswerUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutParticipantInput | AnswerUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuizUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<QuizCreateWithoutParticipantInput, QuizUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: QuizCreateOrConnectWithoutParticipantInput
    upsert?: QuizUpsertWithoutParticipantInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutParticipantInput, QuizUpdateWithoutParticipantInput>, QuizUncheckedUpdateWithoutParticipantInput>
  }

  export type UserUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantInput
    upsert?: UserUpsertWithoutParticipantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantInput, UserUpdateWithoutParticipantInput>, UserUncheckedUpdateWithoutParticipantInput>
  }

  export type ParticipantResultUpdateOneWithoutParticipantNestedInput = {
    create?: XOR<ParticipantResultCreateWithoutParticipantInput, ParticipantResultUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: ParticipantResultCreateOrConnectWithoutParticipantInput
    upsert?: ParticipantResultUpsertWithoutParticipantInput
    disconnect?: ParticipantResultWhereInput | boolean
    delete?: ParticipantResultWhereInput | boolean
    connect?: ParticipantResultWhereUniqueInput
    update?: XOR<XOR<ParticipantResultUpdateToOneWithWhereWithoutParticipantInput, ParticipantResultUpdateWithoutParticipantInput>, ParticipantResultUncheckedUpdateWithoutParticipantInput>
  }

  export type AnswerUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<AnswerCreateWithoutParticipantInput, AnswerUncheckedCreateWithoutParticipantInput> | AnswerCreateWithoutParticipantInput[] | AnswerUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutParticipantInput | AnswerCreateOrConnectWithoutParticipantInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutParticipantInput | AnswerUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: AnswerCreateManyParticipantInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutParticipantInput | AnswerUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutParticipantInput | AnswerUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type ParticipantResultUncheckedUpdateOneWithoutParticipantNestedInput = {
    create?: XOR<ParticipantResultCreateWithoutParticipantInput, ParticipantResultUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: ParticipantResultCreateOrConnectWithoutParticipantInput
    upsert?: ParticipantResultUpsertWithoutParticipantInput
    disconnect?: ParticipantResultWhereInput | boolean
    delete?: ParticipantResultWhereInput | boolean
    connect?: ParticipantResultWhereUniqueInput
    update?: XOR<XOR<ParticipantResultUpdateToOneWithWhereWithoutParticipantInput, ParticipantResultUpdateWithoutParticipantInput>, ParticipantResultUncheckedUpdateWithoutParticipantInput>
  }

  export type ParticipantCreateNestedOneWithoutParticipantResultInput = {
    create?: XOR<ParticipantCreateWithoutParticipantResultInput, ParticipantUncheckedCreateWithoutParticipantResultInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutParticipantResultInput
    connect?: ParticipantWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutParticipantResultInput = {
    create?: XOR<QuizCreateWithoutParticipantResultInput, QuizUncheckedCreateWithoutParticipantResultInput>
    connectOrCreate?: QuizCreateOrConnectWithoutParticipantResultInput
    connect?: QuizWhereUniqueInput
  }

  export type ParticipantUpdateOneRequiredWithoutParticipantResultNestedInput = {
    create?: XOR<ParticipantCreateWithoutParticipantResultInput, ParticipantUncheckedCreateWithoutParticipantResultInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutParticipantResultInput
    upsert?: ParticipantUpsertWithoutParticipantResultInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutParticipantResultInput, ParticipantUpdateWithoutParticipantResultInput>, ParticipantUncheckedUpdateWithoutParticipantResultInput>
  }

  export type QuizUpdateOneRequiredWithoutParticipantResultNestedInput = {
    create?: XOR<QuizCreateWithoutParticipantResultInput, QuizUncheckedCreateWithoutParticipantResultInput>
    connectOrCreate?: QuizCreateOrConnectWithoutParticipantResultInput
    upsert?: QuizUpsertWithoutParticipantResultInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutParticipantResultInput, QuizUpdateWithoutParticipantResultInput>, QuizUncheckedUpdateWithoutParticipantResultInput>
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutQuestionInput = {
    create?: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutQuestionInput = {
    create?: XOR<QuizCreateWithoutQuestionInput, QuizUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionInput
    connect?: QuizWhereUniqueInput
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionInput
    upsert?: UserUpsertWithoutQuestionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionInput, UserUpdateWithoutQuestionInput>, UserUncheckedUpdateWithoutQuestionInput>
  }

  export type QuizUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionInput, QuizUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionInput
    upsert?: QuizUpsertWithoutQuestionInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionInput, QuizUpdateWithoutQuestionInput>, QuizUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type ParticipantCreateNestedManyWithoutQuizInput = {
    create?: XOR<ParticipantCreateWithoutQuizInput, ParticipantUncheckedCreateWithoutQuizInput> | ParticipantCreateWithoutQuizInput[] | ParticipantUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutQuizInput | ParticipantCreateOrConnectWithoutQuizInput[]
    createMany?: ParticipantCreateManyQuizInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type ParticipantResultCreateNestedManyWithoutQuizInput = {
    create?: XOR<ParticipantResultCreateWithoutQuizInput, ParticipantResultUncheckedCreateWithoutQuizInput> | ParticipantResultCreateWithoutQuizInput[] | ParticipantResultUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ParticipantResultCreateOrConnectWithoutQuizInput | ParticipantResultCreateOrConnectWithoutQuizInput[]
    createMany?: ParticipantResultCreateManyQuizInputEnvelope
    connect?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutQuizInput = {
    create?: XOR<UserCreateWithoutQuizInput, UserUncheckedCreateWithoutQuizInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizInput
    connect?: UserWhereUniqueInput
  }

  export type QuizResultQueueCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizResultQueueCreateWithoutQuizInput, QuizResultQueueUncheckedCreateWithoutQuizInput> | QuizResultQueueCreateWithoutQuizInput[] | QuizResultQueueUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizResultQueueCreateOrConnectWithoutQuizInput | QuizResultQueueCreateOrConnectWithoutQuizInput[]
    createMany?: QuizResultQueueCreateManyQuizInputEnvelope
    connect?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
  }

  export type RewardCreateNestedOneWithoutQuizInput = {
    create?: XOR<RewardCreateWithoutQuizInput, RewardUncheckedCreateWithoutQuizInput>
    connectOrCreate?: RewardCreateOrConnectWithoutQuizInput
    connect?: RewardWhereUniqueInput
  }

  export type ScoreDistributionCreateNestedManyWithoutQuizInput = {
    create?: XOR<ScoreDistributionCreateWithoutQuizInput, ScoreDistributionUncheckedCreateWithoutQuizInput> | ScoreDistributionCreateWithoutQuizInput[] | ScoreDistributionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ScoreDistributionCreateOrConnectWithoutQuizInput | ScoreDistributionCreateOrConnectWithoutQuizInput[]
    createMany?: ScoreDistributionCreateManyQuizInputEnvelope
    connect?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<ParticipantCreateWithoutQuizInput, ParticipantUncheckedCreateWithoutQuizInput> | ParticipantCreateWithoutQuizInput[] | ParticipantUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutQuizInput | ParticipantCreateOrConnectWithoutQuizInput[]
    createMany?: ParticipantCreateManyQuizInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type ParticipantResultUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<ParticipantResultCreateWithoutQuizInput, ParticipantResultUncheckedCreateWithoutQuizInput> | ParticipantResultCreateWithoutQuizInput[] | ParticipantResultUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ParticipantResultCreateOrConnectWithoutQuizInput | ParticipantResultCreateOrConnectWithoutQuizInput[]
    createMany?: ParticipantResultCreateManyQuizInputEnvelope
    connect?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizResultQueueUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizResultQueueCreateWithoutQuizInput, QuizResultQueueUncheckedCreateWithoutQuizInput> | QuizResultQueueCreateWithoutQuizInput[] | QuizResultQueueUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizResultQueueCreateOrConnectWithoutQuizInput | QuizResultQueueCreateOrConnectWithoutQuizInput[]
    createMany?: QuizResultQueueCreateManyQuizInputEnvelope
    connect?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
  }

  export type RewardUncheckedCreateNestedOneWithoutQuizInput = {
    create?: XOR<RewardCreateWithoutQuizInput, RewardUncheckedCreateWithoutQuizInput>
    connectOrCreate?: RewardCreateOrConnectWithoutQuizInput
    connect?: RewardWhereUniqueInput
  }

  export type ScoreDistributionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<ScoreDistributionCreateWithoutQuizInput, ScoreDistributionUncheckedCreateWithoutQuizInput> | ScoreDistributionCreateWithoutQuizInput[] | ScoreDistributionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ScoreDistributionCreateOrConnectWithoutQuizInput | ScoreDistributionCreateOrConnectWithoutQuizInput[]
    createMany?: ScoreDistributionCreateManyQuizInputEnvelope
    connect?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumQuizStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuizStatus
  }

  export type ParticipantUpdateManyWithoutQuizNestedInput = {
    create?: XOR<ParticipantCreateWithoutQuizInput, ParticipantUncheckedCreateWithoutQuizInput> | ParticipantCreateWithoutQuizInput[] | ParticipantUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutQuizInput | ParticipantCreateOrConnectWithoutQuizInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutQuizInput | ParticipantUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: ParticipantCreateManyQuizInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutQuizInput | ParticipantUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutQuizInput | ParticipantUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type ParticipantResultUpdateManyWithoutQuizNestedInput = {
    create?: XOR<ParticipantResultCreateWithoutQuizInput, ParticipantResultUncheckedCreateWithoutQuizInput> | ParticipantResultCreateWithoutQuizInput[] | ParticipantResultUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ParticipantResultCreateOrConnectWithoutQuizInput | ParticipantResultCreateOrConnectWithoutQuizInput[]
    upsert?: ParticipantResultUpsertWithWhereUniqueWithoutQuizInput | ParticipantResultUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: ParticipantResultCreateManyQuizInputEnvelope
    set?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
    disconnect?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
    delete?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
    connect?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
    update?: ParticipantResultUpdateWithWhereUniqueWithoutQuizInput | ParticipantResultUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: ParticipantResultUpdateManyWithWhereWithoutQuizInput | ParticipantResultUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: ParticipantResultScalarWhereInput | ParticipantResultScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<UserCreateWithoutQuizInput, UserUncheckedCreateWithoutQuizInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizInput
    upsert?: UserUpsertWithoutQuizInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizInput, UserUpdateWithoutQuizInput>, UserUncheckedUpdateWithoutQuizInput>
  }

  export type QuizResultQueueUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizResultQueueCreateWithoutQuizInput, QuizResultQueueUncheckedCreateWithoutQuizInput> | QuizResultQueueCreateWithoutQuizInput[] | QuizResultQueueUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizResultQueueCreateOrConnectWithoutQuizInput | QuizResultQueueCreateOrConnectWithoutQuizInput[]
    upsert?: QuizResultQueueUpsertWithWhereUniqueWithoutQuizInput | QuizResultQueueUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizResultQueueCreateManyQuizInputEnvelope
    set?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
    disconnect?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
    delete?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
    connect?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
    update?: QuizResultQueueUpdateWithWhereUniqueWithoutQuizInput | QuizResultQueueUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizResultQueueUpdateManyWithWhereWithoutQuizInput | QuizResultQueueUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizResultQueueScalarWhereInput | QuizResultQueueScalarWhereInput[]
  }

  export type RewardUpdateOneWithoutQuizNestedInput = {
    create?: XOR<RewardCreateWithoutQuizInput, RewardUncheckedCreateWithoutQuizInput>
    connectOrCreate?: RewardCreateOrConnectWithoutQuizInput
    upsert?: RewardUpsertWithoutQuizInput
    disconnect?: RewardWhereInput | boolean
    delete?: RewardWhereInput | boolean
    connect?: RewardWhereUniqueInput
    update?: XOR<XOR<RewardUpdateToOneWithWhereWithoutQuizInput, RewardUpdateWithoutQuizInput>, RewardUncheckedUpdateWithoutQuizInput>
  }

  export type ScoreDistributionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<ScoreDistributionCreateWithoutQuizInput, ScoreDistributionUncheckedCreateWithoutQuizInput> | ScoreDistributionCreateWithoutQuizInput[] | ScoreDistributionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ScoreDistributionCreateOrConnectWithoutQuizInput | ScoreDistributionCreateOrConnectWithoutQuizInput[]
    upsert?: ScoreDistributionUpsertWithWhereUniqueWithoutQuizInput | ScoreDistributionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: ScoreDistributionCreateManyQuizInputEnvelope
    set?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
    disconnect?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
    delete?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
    connect?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
    update?: ScoreDistributionUpdateWithWhereUniqueWithoutQuizInput | ScoreDistributionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: ScoreDistributionUpdateManyWithWhereWithoutQuizInput | ScoreDistributionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: ScoreDistributionScalarWhereInput | ScoreDistributionScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<ParticipantCreateWithoutQuizInput, ParticipantUncheckedCreateWithoutQuizInput> | ParticipantCreateWithoutQuizInput[] | ParticipantUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutQuizInput | ParticipantCreateOrConnectWithoutQuizInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutQuizInput | ParticipantUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: ParticipantCreateManyQuizInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutQuizInput | ParticipantUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutQuizInput | ParticipantUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type ParticipantResultUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<ParticipantResultCreateWithoutQuizInput, ParticipantResultUncheckedCreateWithoutQuizInput> | ParticipantResultCreateWithoutQuizInput[] | ParticipantResultUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ParticipantResultCreateOrConnectWithoutQuizInput | ParticipantResultCreateOrConnectWithoutQuizInput[]
    upsert?: ParticipantResultUpsertWithWhereUniqueWithoutQuizInput | ParticipantResultUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: ParticipantResultCreateManyQuizInputEnvelope
    set?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
    disconnect?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
    delete?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
    connect?: ParticipantResultWhereUniqueInput | ParticipantResultWhereUniqueInput[]
    update?: ParticipantResultUpdateWithWhereUniqueWithoutQuizInput | ParticipantResultUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: ParticipantResultUpdateManyWithWhereWithoutQuizInput | ParticipantResultUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: ParticipantResultScalarWhereInput | ParticipantResultScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizResultQueueUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizResultQueueCreateWithoutQuizInput, QuizResultQueueUncheckedCreateWithoutQuizInput> | QuizResultQueueCreateWithoutQuizInput[] | QuizResultQueueUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizResultQueueCreateOrConnectWithoutQuizInput | QuizResultQueueCreateOrConnectWithoutQuizInput[]
    upsert?: QuizResultQueueUpsertWithWhereUniqueWithoutQuizInput | QuizResultQueueUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizResultQueueCreateManyQuizInputEnvelope
    set?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
    disconnect?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
    delete?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
    connect?: QuizResultQueueWhereUniqueInput | QuizResultQueueWhereUniqueInput[]
    update?: QuizResultQueueUpdateWithWhereUniqueWithoutQuizInput | QuizResultQueueUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizResultQueueUpdateManyWithWhereWithoutQuizInput | QuizResultQueueUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizResultQueueScalarWhereInput | QuizResultQueueScalarWhereInput[]
  }

  export type RewardUncheckedUpdateOneWithoutQuizNestedInput = {
    create?: XOR<RewardCreateWithoutQuizInput, RewardUncheckedCreateWithoutQuizInput>
    connectOrCreate?: RewardCreateOrConnectWithoutQuizInput
    upsert?: RewardUpsertWithoutQuizInput
    disconnect?: RewardWhereInput | boolean
    delete?: RewardWhereInput | boolean
    connect?: RewardWhereUniqueInput
    update?: XOR<XOR<RewardUpdateToOneWithWhereWithoutQuizInput, RewardUpdateWithoutQuizInput>, RewardUncheckedUpdateWithoutQuizInput>
  }

  export type ScoreDistributionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<ScoreDistributionCreateWithoutQuizInput, ScoreDistributionUncheckedCreateWithoutQuizInput> | ScoreDistributionCreateWithoutQuizInput[] | ScoreDistributionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: ScoreDistributionCreateOrConnectWithoutQuizInput | ScoreDistributionCreateOrConnectWithoutQuizInput[]
    upsert?: ScoreDistributionUpsertWithWhereUniqueWithoutQuizInput | ScoreDistributionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: ScoreDistributionCreateManyQuizInputEnvelope
    set?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
    disconnect?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
    delete?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
    connect?: ScoreDistributionWhereUniqueInput | ScoreDistributionWhereUniqueInput[]
    update?: ScoreDistributionUpdateWithWhereUniqueWithoutQuizInput | ScoreDistributionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: ScoreDistributionUpdateManyWithWhereWithoutQuizInput | ScoreDistributionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: ScoreDistributionScalarWhereInput | ScoreDistributionScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuizResultQueueInput = {
    create?: XOR<QuizCreateWithoutQuizResultQueueInput, QuizUncheckedCreateWithoutQuizResultQueueInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuizResultQueueInput
    connect?: QuizWhereUniqueInput
  }

  export type QuizResultQueueOutboxCreateNestedOneWithoutQuizResultQueueInput = {
    create?: XOR<QuizResultQueueOutboxCreateWithoutQuizResultQueueInput, QuizResultQueueOutboxUncheckedCreateWithoutQuizResultQueueInput>
    connectOrCreate?: QuizResultQueueOutboxCreateOrConnectWithoutQuizResultQueueInput
    connect?: QuizResultQueueOutboxWhereUniqueInput
  }

  export type QuizResultQueueOutboxUncheckedCreateNestedOneWithoutQuizResultQueueInput = {
    create?: XOR<QuizResultQueueOutboxCreateWithoutQuizResultQueueInput, QuizResultQueueOutboxUncheckedCreateWithoutQuizResultQueueInput>
    connectOrCreate?: QuizResultQueueOutboxCreateOrConnectWithoutQuizResultQueueInput
    connect?: QuizResultQueueOutboxWhereUniqueInput
  }

  export type QuizUpdateOneRequiredWithoutQuizResultQueueNestedInput = {
    create?: XOR<QuizCreateWithoutQuizResultQueueInput, QuizUncheckedCreateWithoutQuizResultQueueInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuizResultQueueInput
    upsert?: QuizUpsertWithoutQuizResultQueueInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuizResultQueueInput, QuizUpdateWithoutQuizResultQueueInput>, QuizUncheckedUpdateWithoutQuizResultQueueInput>
  }

  export type QuizResultQueueOutboxUpdateOneWithoutQuizResultQueueNestedInput = {
    create?: XOR<QuizResultQueueOutboxCreateWithoutQuizResultQueueInput, QuizResultQueueOutboxUncheckedCreateWithoutQuizResultQueueInput>
    connectOrCreate?: QuizResultQueueOutboxCreateOrConnectWithoutQuizResultQueueInput
    upsert?: QuizResultQueueOutboxUpsertWithoutQuizResultQueueInput
    disconnect?: QuizResultQueueOutboxWhereInput | boolean
    delete?: QuizResultQueueOutboxWhereInput | boolean
    connect?: QuizResultQueueOutboxWhereUniqueInput
    update?: XOR<XOR<QuizResultQueueOutboxUpdateToOneWithWhereWithoutQuizResultQueueInput, QuizResultQueueOutboxUpdateWithoutQuizResultQueueInput>, QuizResultQueueOutboxUncheckedUpdateWithoutQuizResultQueueInput>
  }

  export type QuizResultQueueOutboxUncheckedUpdateOneWithoutQuizResultQueueNestedInput = {
    create?: XOR<QuizResultQueueOutboxCreateWithoutQuizResultQueueInput, QuizResultQueueOutboxUncheckedCreateWithoutQuizResultQueueInput>
    connectOrCreate?: QuizResultQueueOutboxCreateOrConnectWithoutQuizResultQueueInput
    upsert?: QuizResultQueueOutboxUpsertWithoutQuizResultQueueInput
    disconnect?: QuizResultQueueOutboxWhereInput | boolean
    delete?: QuizResultQueueOutboxWhereInput | boolean
    connect?: QuizResultQueueOutboxWhereUniqueInput
    update?: XOR<XOR<QuizResultQueueOutboxUpdateToOneWithWhereWithoutQuizResultQueueInput, QuizResultQueueOutboxUpdateWithoutQuizResultQueueInput>, QuizResultQueueOutboxUncheckedUpdateWithoutQuizResultQueueInput>
  }

  export type QuizResultQueueCreateNestedOneWithoutQuizResultQueueOutboxInput = {
    create?: XOR<QuizResultQueueCreateWithoutQuizResultQueueOutboxInput, QuizResultQueueUncheckedCreateWithoutQuizResultQueueOutboxInput>
    connectOrCreate?: QuizResultQueueCreateOrConnectWithoutQuizResultQueueOutboxInput
    connect?: QuizResultQueueWhereUniqueInput
  }

  export type QuizResultQueueUpdateOneRequiredWithoutQuizResultQueueOutboxNestedInput = {
    create?: XOR<QuizResultQueueCreateWithoutQuizResultQueueOutboxInput, QuizResultQueueUncheckedCreateWithoutQuizResultQueueOutboxInput>
    connectOrCreate?: QuizResultQueueCreateOrConnectWithoutQuizResultQueueOutboxInput
    upsert?: QuizResultQueueUpsertWithoutQuizResultQueueOutboxInput
    connect?: QuizResultQueueWhereUniqueInput
    update?: XOR<XOR<QuizResultQueueUpdateToOneWithWhereWithoutQuizResultQueueOutboxInput, QuizResultQueueUpdateWithoutQuizResultQueueOutboxInput>, QuizResultQueueUncheckedUpdateWithoutQuizResultQueueOutboxInput>
  }

  export type QuizCreateNestedOneWithoutRewardInput = {
    create?: XOR<QuizCreateWithoutRewardInput, QuizUncheckedCreateWithoutRewardInput>
    connectOrCreate?: QuizCreateOrConnectWithoutRewardInput
    connect?: QuizWhereUniqueInput
  }

  export type EnumRewardBrandsFieldUpdateOperationsInput = {
    set?: $Enums.RewardBrands
  }

  export type QuizUpdateOneRequiredWithoutRewardNestedInput = {
    create?: XOR<QuizCreateWithoutRewardInput, QuizUncheckedCreateWithoutRewardInput>
    connectOrCreate?: QuizCreateOrConnectWithoutRewardInput
    upsert?: QuizUpsertWithoutRewardInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutRewardInput, QuizUpdateWithoutRewardInput>, QuizUncheckedUpdateWithoutRewardInput>
  }

  export type QuizCreateNestedOneWithoutScoreDistributionInput = {
    create?: XOR<QuizCreateWithoutScoreDistributionInput, QuizUncheckedCreateWithoutScoreDistributionInput>
    connectOrCreate?: QuizCreateOrConnectWithoutScoreDistributionInput
    connect?: QuizWhereUniqueInput
  }

  export type QuizUpdateOneRequiredWithoutScoreDistributionNestedInput = {
    create?: XOR<QuizCreateWithoutScoreDistributionInput, QuizUncheckedCreateWithoutScoreDistributionInput>
    connectOrCreate?: QuizCreateOrConnectWithoutScoreDistributionInput
    upsert?: QuizUpsertWithoutScoreDistributionInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutScoreDistributionInput, QuizUpdateWithoutScoreDistributionInput>, QuizUncheckedUpdateWithoutScoreDistributionInput>
  }

  export type ParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizCreateWithoutUserInput, QuizUncheckedCreateWithoutUserInput> | QuizCreateWithoutUserInput[] | QuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutUserInput | QuizCreateOrConnectWithoutUserInput[]
    createMany?: QuizCreateManyUserInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UserDiscordCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDiscordCreateWithoutUserInput, UserDiscordUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDiscordCreateOrConnectWithoutUserInput
    connect?: UserDiscordWhereUniqueInput
  }

  export type ParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizCreateWithoutUserInput, QuizUncheckedCreateWithoutUserInput> | QuizCreateWithoutUserInput[] | QuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutUserInput | QuizCreateOrConnectWithoutUserInput[]
    createMany?: QuizCreateManyUserInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UserDiscordUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDiscordCreateWithoutUserInput, UserDiscordUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDiscordCreateOrConnectWithoutUserInput
    connect?: UserDiscordWhereUniqueInput
  }

  export type ParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutUserInput | ParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutUserInput | ParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutUserInput | ParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizCreateWithoutUserInput, QuizUncheckedCreateWithoutUserInput> | QuizCreateWithoutUserInput[] | QuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutUserInput | QuizCreateOrConnectWithoutUserInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutUserInput | QuizUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizCreateManyUserInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutUserInput | QuizUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutUserInput | QuizUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserDiscordUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDiscordCreateWithoutUserInput, UserDiscordUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDiscordCreateOrConnectWithoutUserInput
    upsert?: UserDiscordUpsertWithoutUserInput
    disconnect?: UserDiscordWhereInput | boolean
    delete?: UserDiscordWhereInput | boolean
    connect?: UserDiscordWhereUniqueInput
    update?: XOR<XOR<UserDiscordUpdateToOneWithWhereWithoutUserInput, UserDiscordUpdateWithoutUserInput>, UserDiscordUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutUserInput | ParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutUserInput | ParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutUserInput | ParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizCreateWithoutUserInput, QuizUncheckedCreateWithoutUserInput> | QuizCreateWithoutUserInput[] | QuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutUserInput | QuizCreateOrConnectWithoutUserInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutUserInput | QuizUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizCreateManyUserInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutUserInput | QuizUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutUserInput | QuizUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserDiscordUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDiscordCreateWithoutUserInput, UserDiscordUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDiscordCreateOrConnectWithoutUserInput
    upsert?: UserDiscordUpsertWithoutUserInput
    disconnect?: UserDiscordWhereInput | boolean
    delete?: UserDiscordWhereInput | boolean
    connect?: UserDiscordWhereUniqueInput
    update?: XOR<XOR<UserDiscordUpdateToOneWithWhereWithoutUserInput, UserDiscordUpdateWithoutUserInput>, UserDiscordUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutUserDiscordInput = {
    create?: XOR<UserCreateWithoutUserDiscordInput, UserUncheckedCreateWithoutUserDiscordInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDiscordInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserDiscordNestedInput = {
    create?: XOR<UserCreateWithoutUserDiscordInput, UserUncheckedCreateWithoutUserDiscordInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDiscordInput
    upsert?: UserUpsertWithoutUserDiscordInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDiscordInput, UserUpdateWithoutUserDiscordInput>, UserUncheckedUpdateWithoutUserDiscordInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumQuizStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusFilter<$PrismaModel> | $Enums.QuizStatus
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

  export type NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizStatus | EnumQuizStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizStatus[] | ListEnumQuizStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuizStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizStatusFilter<$PrismaModel>
    _max?: NestedEnumQuizStatusFilter<$PrismaModel>
  }

  export type NestedEnumRewardBrandsFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardBrands | EnumRewardBrandsFieldRefInput<$PrismaModel>
    in?: $Enums.RewardBrands[] | ListEnumRewardBrandsFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardBrands[] | ListEnumRewardBrandsFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardBrandsFilter<$PrismaModel> | $Enums.RewardBrands
  }

  export type NestedEnumRewardBrandsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardBrands | EnumRewardBrandsFieldRefInput<$PrismaModel>
    in?: $Enums.RewardBrands[] | ListEnumRewardBrandsFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardBrands[] | ListEnumRewardBrandsFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardBrandsWithAggregatesFilter<$PrismaModel> | $Enums.RewardBrands
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardBrandsFilter<$PrismaModel>
    _max?: NestedEnumRewardBrandsFilter<$PrismaModel>
  }

  export type ParticipantCreateWithoutAnswerInput = {
    id?: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Quiz: QuizCreateNestedOneWithoutParticipantInput
    User: UserCreateNestedOneWithoutParticipantInput
    ParticipantResult?: ParticipantResultCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutAnswerInput = {
    id?: string
    userId: string
    quizId: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    ParticipantResult?: ParticipantResultUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutAnswerInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutAnswerInput, ParticipantUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionCreateWithoutAnswerInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    correctOption: number
    CorrectAnswerPercentage?: number
    User: UserCreateNestedOneWithoutQuestionInput
    Quiz: QuizCreateNestedOneWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswerInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    quizId: string
    creatorId: string
    correctOption: number
    CorrectAnswerPercentage?: number
  }

  export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type AnswerOutboxCreateWithoutAnswerInput = {
    id?: string
  }

  export type AnswerOutboxUncheckedCreateWithoutAnswerInput = {
    id?: string
  }

  export type AnswerOutboxCreateOrConnectWithoutAnswerInput = {
    where: AnswerOutboxWhereUniqueInput
    create: XOR<AnswerOutboxCreateWithoutAnswerInput, AnswerOutboxUncheckedCreateWithoutAnswerInput>
  }

  export type ParticipantUpsertWithoutAnswerInput = {
    update: XOR<ParticipantUpdateWithoutAnswerInput, ParticipantUncheckedUpdateWithoutAnswerInput>
    create: XOR<ParticipantCreateWithoutAnswerInput, ParticipantUncheckedCreateWithoutAnswerInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutAnswerInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutAnswerInput, ParticipantUncheckedUpdateWithoutAnswerInput>
  }

  export type ParticipantUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Quiz?: QuizUpdateOneRequiredWithoutParticipantNestedInput
    User?: UserUpdateOneRequiredWithoutParticipantNestedInput
    ParticipantResult?: ParticipantResultUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    ParticipantResult?: ParticipantResultUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type QuestionUpsertWithoutAnswerInput = {
    update: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswerInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type QuestionUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutQuestionNestedInput
    Quiz?: QuizUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    quizId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type AnswerOutboxUpsertWithoutAnswerInput = {
    update: XOR<AnswerOutboxUpdateWithoutAnswerInput, AnswerOutboxUncheckedUpdateWithoutAnswerInput>
    create: XOR<AnswerOutboxCreateWithoutAnswerInput, AnswerOutboxUncheckedCreateWithoutAnswerInput>
    where?: AnswerOutboxWhereInput
  }

  export type AnswerOutboxUpdateToOneWithWhereWithoutAnswerInput = {
    where?: AnswerOutboxWhereInput
    data: XOR<AnswerOutboxUpdateWithoutAnswerInput, AnswerOutboxUncheckedUpdateWithoutAnswerInput>
  }

  export type AnswerOutboxUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerOutboxUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateWithoutAnswerOutboxInput = {
    id?: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
    Participant: ParticipantCreateNestedOneWithoutAnswerInput
    Question: QuestionCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutAnswerOutboxInput = {
    id?: string
    participantId: string
    questionId: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
  }

  export type AnswerCreateOrConnectWithoutAnswerOutboxInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutAnswerOutboxInput, AnswerUncheckedCreateWithoutAnswerOutboxInput>
  }

  export type AnswerUpsertWithoutAnswerOutboxInput = {
    update: XOR<AnswerUpdateWithoutAnswerOutboxInput, AnswerUncheckedUpdateWithoutAnswerOutboxInput>
    create: XOR<AnswerCreateWithoutAnswerOutboxInput, AnswerUncheckedCreateWithoutAnswerOutboxInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutAnswerOutboxInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutAnswerOutboxInput, AnswerUncheckedUpdateWithoutAnswerOutboxInput>
  }

  export type AnswerUpdateWithoutAnswerOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
    Participant?: ParticipantUpdateOneRequiredWithoutAnswerNestedInput
    Question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutAnswerOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateWithoutParticipantInput = {
    id?: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
    Question: QuestionCreateNestedOneWithoutAnswerInput
    AnswerOutbox?: AnswerOutboxCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutParticipantInput = {
    id?: string
    questionId: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
    AnswerOutbox?: AnswerOutboxUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutParticipantInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutParticipantInput, AnswerUncheckedCreateWithoutParticipantInput>
  }

  export type AnswerCreateManyParticipantInputEnvelope = {
    data: AnswerCreateManyParticipantInput | AnswerCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutParticipantInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    ParticipantResult?: ParticipantResultCreateNestedManyWithoutQuizInput
    Question?: QuestionCreateNestedManyWithoutQuizInput
    User: UserCreateNestedOneWithoutQuizInput
    QuizResultQueue?: QuizResultQueueCreateNestedManyWithoutQuizInput
    Reward?: RewardCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutParticipantInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    ParticipantResult?: ParticipantResultUncheckedCreateNestedManyWithoutQuizInput
    Question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    QuizResultQueue?: QuizResultQueueUncheckedCreateNestedManyWithoutQuizInput
    Reward?: RewardUncheckedCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutParticipantInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutParticipantInput, QuizUncheckedCreateWithoutParticipantInput>
  }

  export type UserCreateWithoutParticipantInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Question?: QuestionCreateNestedManyWithoutUserInput
    Quiz?: QuizCreateNestedManyWithoutUserInput
    UserDiscord?: UserDiscordCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    Quiz?: QuizUncheckedCreateNestedManyWithoutUserInput
    UserDiscord?: UserDiscordUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
  }

  export type ParticipantResultCreateWithoutParticipantInput = {
    id?: string
    score: number
    rank: number
    createdAt?: Date | string
    Quiz: QuizCreateNestedOneWithoutParticipantResultInput
  }

  export type ParticipantResultUncheckedCreateWithoutParticipantInput = {
    id?: string
    quizId: string
    score: number
    rank: number
    createdAt?: Date | string
  }

  export type ParticipantResultCreateOrConnectWithoutParticipantInput = {
    where: ParticipantResultWhereUniqueInput
    create: XOR<ParticipantResultCreateWithoutParticipantInput, ParticipantResultUncheckedCreateWithoutParticipantInput>
  }

  export type AnswerUpsertWithWhereUniqueWithoutParticipantInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutParticipantInput, AnswerUncheckedUpdateWithoutParticipantInput>
    create: XOR<AnswerCreateWithoutParticipantInput, AnswerUncheckedCreateWithoutParticipantInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutParticipantInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutParticipantInput, AnswerUncheckedUpdateWithoutParticipantInput>
  }

  export type AnswerUpdateManyWithWhereWithoutParticipantInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutParticipantInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    participantId?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    isAnswerCorrect?: BoolNullableFilter<"Answer"> | boolean | null
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    selectedOption?: IntFilter<"Answer"> | number
  }

  export type QuizUpsertWithoutParticipantInput = {
    update: XOR<QuizUpdateWithoutParticipantInput, QuizUncheckedUpdateWithoutParticipantInput>
    create: XOR<QuizCreateWithoutParticipantInput, QuizUncheckedCreateWithoutParticipantInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutParticipantInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutParticipantInput, QuizUncheckedUpdateWithoutParticipantInput>
  }

  export type QuizUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ParticipantResult?: ParticipantResultUpdateManyWithoutQuizNestedInput
    Question?: QuestionUpdateManyWithoutQuizNestedInput
    User?: UserUpdateOneRequiredWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUpdateManyWithoutQuizNestedInput
    Reward?: RewardUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ParticipantResult?: ParticipantResultUncheckedUpdateManyWithoutQuizNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUncheckedUpdateManyWithoutQuizNestedInput
    Reward?: RewardUncheckedUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserUpsertWithoutParticipantInput = {
    update: XOR<UserUpdateWithoutParticipantInput, UserUncheckedUpdateWithoutParticipantInput>
    create: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantInput, UserUncheckedUpdateWithoutParticipantInput>
  }

  export type UserUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Question?: QuestionUpdateManyWithoutUserNestedInput
    Quiz?: QuizUpdateManyWithoutUserNestedInput
    UserDiscord?: UserDiscordUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Question?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    Quiz?: QuizUncheckedUpdateManyWithoutUserNestedInput
    UserDiscord?: UserDiscordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ParticipantResultUpsertWithoutParticipantInput = {
    update: XOR<ParticipantResultUpdateWithoutParticipantInput, ParticipantResultUncheckedUpdateWithoutParticipantInput>
    create: XOR<ParticipantResultCreateWithoutParticipantInput, ParticipantResultUncheckedCreateWithoutParticipantInput>
    where?: ParticipantResultWhereInput
  }

  export type ParticipantResultUpdateToOneWithWhereWithoutParticipantInput = {
    where?: ParticipantResultWhereInput
    data: XOR<ParticipantResultUpdateWithoutParticipantInput, ParticipantResultUncheckedUpdateWithoutParticipantInput>
  }

  export type ParticipantResultUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Quiz?: QuizUpdateOneRequiredWithoutParticipantResultNestedInput
  }

  export type ParticipantResultUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateWithoutParticipantResultInput = {
    id?: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Answer?: AnswerCreateNestedManyWithoutParticipantInput
    Quiz: QuizCreateNestedOneWithoutParticipantInput
    User: UserCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutParticipantResultInput = {
    id?: string
    userId: string
    quizId: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Answer?: AnswerUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutParticipantResultInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutParticipantResultInput, ParticipantUncheckedCreateWithoutParticipantResultInput>
  }

  export type QuizCreateWithoutParticipantResultInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantCreateNestedManyWithoutQuizInput
    Question?: QuestionCreateNestedManyWithoutQuizInput
    User: UserCreateNestedOneWithoutQuizInput
    QuizResultQueue?: QuizResultQueueCreateNestedManyWithoutQuizInput
    Reward?: RewardCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutParticipantResultInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantUncheckedCreateNestedManyWithoutQuizInput
    Question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    QuizResultQueue?: QuizResultQueueUncheckedCreateNestedManyWithoutQuizInput
    Reward?: RewardUncheckedCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutParticipantResultInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutParticipantResultInput, QuizUncheckedCreateWithoutParticipantResultInput>
  }

  export type ParticipantUpsertWithoutParticipantResultInput = {
    update: XOR<ParticipantUpdateWithoutParticipantResultInput, ParticipantUncheckedUpdateWithoutParticipantResultInput>
    create: XOR<ParticipantCreateWithoutParticipantResultInput, ParticipantUncheckedCreateWithoutParticipantResultInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutParticipantResultInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutParticipantResultInput, ParticipantUncheckedUpdateWithoutParticipantResultInput>
  }

  export type ParticipantUpdateWithoutParticipantResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Answer?: AnswerUpdateManyWithoutParticipantNestedInput
    Quiz?: QuizUpdateOneRequiredWithoutParticipantNestedInput
    User?: UserUpdateOneRequiredWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutParticipantResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Answer?: AnswerUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type QuizUpsertWithoutParticipantResultInput = {
    update: XOR<QuizUpdateWithoutParticipantResultInput, QuizUncheckedUpdateWithoutParticipantResultInput>
    create: XOR<QuizCreateWithoutParticipantResultInput, QuizUncheckedCreateWithoutParticipantResultInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutParticipantResultInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutParticipantResultInput, QuizUncheckedUpdateWithoutParticipantResultInput>
  }

  export type QuizUpdateWithoutParticipantResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateManyWithoutQuizNestedInput
    Question?: QuestionUpdateManyWithoutQuizNestedInput
    User?: UserUpdateOneRequiredWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUpdateManyWithoutQuizNestedInput
    Reward?: RewardUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutParticipantResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUncheckedUpdateManyWithoutQuizNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUncheckedUpdateManyWithoutQuizNestedInput
    Reward?: RewardUncheckedUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
    Participant: ParticipantCreateNestedOneWithoutAnswerInput
    AnswerOutbox?: AnswerOutboxCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    participantId: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
    AnswerOutbox?: AnswerOutboxUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutQuestionInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Participant?: ParticipantCreateNestedManyWithoutUserInput
    Quiz?: QuizCreateNestedManyWithoutUserInput
    UserDiscord?: UserDiscordCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Participant?: ParticipantUncheckedCreateNestedManyWithoutUserInput
    Quiz?: QuizUncheckedCreateNestedManyWithoutUserInput
    UserDiscord?: UserDiscordUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
  }

  export type QuizCreateWithoutQuestionInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultCreateNestedManyWithoutQuizInput
    User: UserCreateNestedOneWithoutQuizInput
    QuizResultQueue?: QuizResultQueueCreateNestedManyWithoutQuizInput
    Reward?: RewardCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantUncheckedCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedManyWithoutQuizInput
    QuizResultQueue?: QuizResultQueueUncheckedCreateNestedManyWithoutQuizInput
    Reward?: RewardUncheckedCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionInput, QuizUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserUpsertWithoutQuestionInput = {
    update: XOR<UserUpdateWithoutQuestionInput, UserUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserCreateWithoutQuestionInput, UserUncheckedCreateWithoutQuestionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionInput, UserUncheckedUpdateWithoutQuestionInput>
  }

  export type UserUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Participant?: ParticipantUpdateManyWithoutUserNestedInput
    Quiz?: QuizUpdateManyWithoutUserNestedInput
    UserDiscord?: UserDiscordUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Participant?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
    Quiz?: QuizUncheckedUpdateManyWithoutUserNestedInput
    UserDiscord?: UserDiscordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type QuizUpsertWithoutQuestionInput = {
    update: XOR<QuizUpdateWithoutQuestionInput, QuizUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuizCreateWithoutQuestionInput, QuizUncheckedCreateWithoutQuestionInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionInput, QuizUncheckedUpdateWithoutQuestionInput>
  }

  export type QuizUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUpdateManyWithoutQuizNestedInput
    User?: UserUpdateOneRequiredWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUpdateManyWithoutQuizNestedInput
    Reward?: RewardUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUncheckedUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateManyWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUncheckedUpdateManyWithoutQuizNestedInput
    Reward?: RewardUncheckedUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type ParticipantCreateWithoutQuizInput = {
    id?: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Answer?: AnswerCreateNestedManyWithoutParticipantInput
    User: UserCreateNestedOneWithoutParticipantInput
    ParticipantResult?: ParticipantResultCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Answer?: AnswerUncheckedCreateNestedManyWithoutParticipantInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutQuizInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutQuizInput, ParticipantUncheckedCreateWithoutQuizInput>
  }

  export type ParticipantCreateManyQuizInputEnvelope = {
    data: ParticipantCreateManyQuizInput | ParticipantCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantResultCreateWithoutQuizInput = {
    id?: string
    score: number
    rank: number
    createdAt?: Date | string
    Participant: ParticipantCreateNestedOneWithoutParticipantResultInput
  }

  export type ParticipantResultUncheckedCreateWithoutQuizInput = {
    id?: string
    participantId: string
    score: number
    rank: number
    createdAt?: Date | string
  }

  export type ParticipantResultCreateOrConnectWithoutQuizInput = {
    where: ParticipantResultWhereUniqueInput
    create: XOR<ParticipantResultCreateWithoutQuizInput, ParticipantResultUncheckedCreateWithoutQuizInput>
  }

  export type ParticipantResultCreateManyQuizInputEnvelope = {
    data: ParticipantResultCreateManyQuizInput | ParticipantResultCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutQuizInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    correctOption: number
    CorrectAnswerPercentage?: number
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
    User: UserCreateNestedOneWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    creatorId: string
    correctOption: number
    CorrectAnswerPercentage?: number
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutQuizInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Participant?: ParticipantCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    UserDiscord?: UserDiscordCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Participant?: ParticipantUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    UserDiscord?: UserDiscordUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizInput, UserUncheckedCreateWithoutQuizInput>
  }

  export type QuizResultQueueCreateWithoutQuizInput = {
    id?: string
    QuizResultQueueOutbox?: QuizResultQueueOutboxCreateNestedOneWithoutQuizResultQueueInput
  }

  export type QuizResultQueueUncheckedCreateWithoutQuizInput = {
    id?: string
    QuizResultQueueOutbox?: QuizResultQueueOutboxUncheckedCreateNestedOneWithoutQuizResultQueueInput
  }

  export type QuizResultQueueCreateOrConnectWithoutQuizInput = {
    where: QuizResultQueueWhereUniqueInput
    create: XOR<QuizResultQueueCreateWithoutQuizInput, QuizResultQueueUncheckedCreateWithoutQuizInput>
  }

  export type QuizResultQueueCreateManyQuizInputEnvelope = {
    data: QuizResultQueueCreateManyQuizInput | QuizResultQueueCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type RewardCreateWithoutQuizInput = {
    id?: string
    brand: $Enums.RewardBrands
    voucherCode: string
  }

  export type RewardUncheckedCreateWithoutQuizInput = {
    id?: string
    brand: $Enums.RewardBrands
    voucherCode: string
  }

  export type RewardCreateOrConnectWithoutQuizInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutQuizInput, RewardUncheckedCreateWithoutQuizInput>
  }

  export type ScoreDistributionCreateWithoutQuizInput = {
    id?: string
    count: number
    label: string
  }

  export type ScoreDistributionUncheckedCreateWithoutQuizInput = {
    id?: string
    count: number
    label: string
  }

  export type ScoreDistributionCreateOrConnectWithoutQuizInput = {
    where: ScoreDistributionWhereUniqueInput
    create: XOR<ScoreDistributionCreateWithoutQuizInput, ScoreDistributionUncheckedCreateWithoutQuizInput>
  }

  export type ScoreDistributionCreateManyQuizInputEnvelope = {
    data: ScoreDistributionCreateManyQuizInput | ScoreDistributionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantUpsertWithWhereUniqueWithoutQuizInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutQuizInput, ParticipantUncheckedUpdateWithoutQuizInput>
    create: XOR<ParticipantCreateWithoutQuizInput, ParticipantUncheckedCreateWithoutQuizInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutQuizInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutQuizInput, ParticipantUncheckedUpdateWithoutQuizInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutQuizInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutQuizInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    id?: StringFilter<"Participant"> | string
    userId?: StringFilter<"Participant"> | string
    quizId?: StringFilter<"Participant"> | string
    joinedAt?: DateTimeFilter<"Participant"> | Date | string
    isConnected?: BoolFilter<"Participant"> | boolean
    isBanned?: BoolFilter<"Participant"> | boolean
  }

  export type ParticipantResultUpsertWithWhereUniqueWithoutQuizInput = {
    where: ParticipantResultWhereUniqueInput
    update: XOR<ParticipantResultUpdateWithoutQuizInput, ParticipantResultUncheckedUpdateWithoutQuizInput>
    create: XOR<ParticipantResultCreateWithoutQuizInput, ParticipantResultUncheckedCreateWithoutQuizInput>
  }

  export type ParticipantResultUpdateWithWhereUniqueWithoutQuizInput = {
    where: ParticipantResultWhereUniqueInput
    data: XOR<ParticipantResultUpdateWithoutQuizInput, ParticipantResultUncheckedUpdateWithoutQuizInput>
  }

  export type ParticipantResultUpdateManyWithWhereWithoutQuizInput = {
    where: ParticipantResultScalarWhereInput
    data: XOR<ParticipantResultUpdateManyMutationInput, ParticipantResultUncheckedUpdateManyWithoutQuizInput>
  }

  export type ParticipantResultScalarWhereInput = {
    AND?: ParticipantResultScalarWhereInput | ParticipantResultScalarWhereInput[]
    OR?: ParticipantResultScalarWhereInput[]
    NOT?: ParticipantResultScalarWhereInput | ParticipantResultScalarWhereInput[]
    id?: StringFilter<"ParticipantResult"> | string
    participantId?: StringFilter<"ParticipantResult"> | string
    quizId?: StringFilter<"ParticipantResult"> | string
    score?: IntFilter<"ParticipantResult"> | number
    rank?: IntFilter<"ParticipantResult"> | number
    createdAt?: DateTimeFilter<"ParticipantResult"> | Date | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    questionIndex?: IntFilter<"Question"> | number
    options?: JsonFilter<"Question">
    quizId?: StringFilter<"Question"> | string
    creatorId?: StringFilter<"Question"> | string
    correctOption?: IntFilter<"Question"> | number
    CorrectAnswerPercentage?: FloatFilter<"Question"> | number
  }

  export type UserUpsertWithoutQuizInput = {
    update: XOR<UserUpdateWithoutQuizInput, UserUncheckedUpdateWithoutQuizInput>
    create: XOR<UserCreateWithoutQuizInput, UserUncheckedCreateWithoutQuizInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizInput, UserUncheckedUpdateWithoutQuizInput>
  }

  export type UserUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Participant?: ParticipantUpdateManyWithoutUserNestedInput
    Question?: QuestionUpdateManyWithoutUserNestedInput
    UserDiscord?: UserDiscordUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Participant?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    UserDiscord?: UserDiscordUncheckedUpdateOneWithoutUserNestedInput
  }

  export type QuizResultQueueUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizResultQueueWhereUniqueInput
    update: XOR<QuizResultQueueUpdateWithoutQuizInput, QuizResultQueueUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizResultQueueCreateWithoutQuizInput, QuizResultQueueUncheckedCreateWithoutQuizInput>
  }

  export type QuizResultQueueUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizResultQueueWhereUniqueInput
    data: XOR<QuizResultQueueUpdateWithoutQuizInput, QuizResultQueueUncheckedUpdateWithoutQuizInput>
  }

  export type QuizResultQueueUpdateManyWithWhereWithoutQuizInput = {
    where: QuizResultQueueScalarWhereInput
    data: XOR<QuizResultQueueUpdateManyMutationInput, QuizResultQueueUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizResultQueueScalarWhereInput = {
    AND?: QuizResultQueueScalarWhereInput | QuizResultQueueScalarWhereInput[]
    OR?: QuizResultQueueScalarWhereInput[]
    NOT?: QuizResultQueueScalarWhereInput | QuizResultQueueScalarWhereInput[]
    id?: StringFilter<"QuizResultQueue"> | string
    quizId?: StringFilter<"QuizResultQueue"> | string
  }

  export type RewardUpsertWithoutQuizInput = {
    update: XOR<RewardUpdateWithoutQuizInput, RewardUncheckedUpdateWithoutQuizInput>
    create: XOR<RewardCreateWithoutQuizInput, RewardUncheckedCreateWithoutQuizInput>
    where?: RewardWhereInput
  }

  export type RewardUpdateToOneWithWhereWithoutQuizInput = {
    where?: RewardWhereInput
    data: XOR<RewardUpdateWithoutQuizInput, RewardUncheckedUpdateWithoutQuizInput>
  }

  export type RewardUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: EnumRewardBrandsFieldUpdateOperationsInput | $Enums.RewardBrands
    voucherCode?: StringFieldUpdateOperationsInput | string
  }

  export type RewardUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: EnumRewardBrandsFieldUpdateOperationsInput | $Enums.RewardBrands
    voucherCode?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreDistributionUpsertWithWhereUniqueWithoutQuizInput = {
    where: ScoreDistributionWhereUniqueInput
    update: XOR<ScoreDistributionUpdateWithoutQuizInput, ScoreDistributionUncheckedUpdateWithoutQuizInput>
    create: XOR<ScoreDistributionCreateWithoutQuizInput, ScoreDistributionUncheckedCreateWithoutQuizInput>
  }

  export type ScoreDistributionUpdateWithWhereUniqueWithoutQuizInput = {
    where: ScoreDistributionWhereUniqueInput
    data: XOR<ScoreDistributionUpdateWithoutQuizInput, ScoreDistributionUncheckedUpdateWithoutQuizInput>
  }

  export type ScoreDistributionUpdateManyWithWhereWithoutQuizInput = {
    where: ScoreDistributionScalarWhereInput
    data: XOR<ScoreDistributionUpdateManyMutationInput, ScoreDistributionUncheckedUpdateManyWithoutQuizInput>
  }

  export type ScoreDistributionScalarWhereInput = {
    AND?: ScoreDistributionScalarWhereInput | ScoreDistributionScalarWhereInput[]
    OR?: ScoreDistributionScalarWhereInput[]
    NOT?: ScoreDistributionScalarWhereInput | ScoreDistributionScalarWhereInput[]
    id?: StringFilter<"ScoreDistribution"> | string
    quizId?: StringFilter<"ScoreDistribution"> | string
    count?: IntFilter<"ScoreDistribution"> | number
    label?: StringFilter<"ScoreDistribution"> | string
  }

  export type QuizCreateWithoutQuizResultQueueInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultCreateNestedManyWithoutQuizInput
    Question?: QuestionCreateNestedManyWithoutQuizInput
    User: UserCreateNestedOneWithoutQuizInput
    Reward?: RewardCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuizResultQueueInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantUncheckedCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedManyWithoutQuizInput
    Question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    Reward?: RewardUncheckedCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuizResultQueueInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuizResultQueueInput, QuizUncheckedCreateWithoutQuizResultQueueInput>
  }

  export type QuizResultQueueOutboxCreateWithoutQuizResultQueueInput = {
    id?: string
  }

  export type QuizResultQueueOutboxUncheckedCreateWithoutQuizResultQueueInput = {
    id?: string
  }

  export type QuizResultQueueOutboxCreateOrConnectWithoutQuizResultQueueInput = {
    where: QuizResultQueueOutboxWhereUniqueInput
    create: XOR<QuizResultQueueOutboxCreateWithoutQuizResultQueueInput, QuizResultQueueOutboxUncheckedCreateWithoutQuizResultQueueInput>
  }

  export type QuizUpsertWithoutQuizResultQueueInput = {
    update: XOR<QuizUpdateWithoutQuizResultQueueInput, QuizUncheckedUpdateWithoutQuizResultQueueInput>
    create: XOR<QuizCreateWithoutQuizResultQueueInput, QuizUncheckedCreateWithoutQuizResultQueueInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuizResultQueueInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuizResultQueueInput, QuizUncheckedUpdateWithoutQuizResultQueueInput>
  }

  export type QuizUpdateWithoutQuizResultQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUpdateManyWithoutQuizNestedInput
    Question?: QuestionUpdateManyWithoutQuizNestedInput
    User?: UserUpdateOneRequiredWithoutQuizNestedInput
    Reward?: RewardUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuizResultQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUncheckedUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateManyWithoutQuizNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    Reward?: RewardUncheckedUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizResultQueueOutboxUpsertWithoutQuizResultQueueInput = {
    update: XOR<QuizResultQueueOutboxUpdateWithoutQuizResultQueueInput, QuizResultQueueOutboxUncheckedUpdateWithoutQuizResultQueueInput>
    create: XOR<QuizResultQueueOutboxCreateWithoutQuizResultQueueInput, QuizResultQueueOutboxUncheckedCreateWithoutQuizResultQueueInput>
    where?: QuizResultQueueOutboxWhereInput
  }

  export type QuizResultQueueOutboxUpdateToOneWithWhereWithoutQuizResultQueueInput = {
    where?: QuizResultQueueOutboxWhereInput
    data: XOR<QuizResultQueueOutboxUpdateWithoutQuizResultQueueInput, QuizResultQueueOutboxUncheckedUpdateWithoutQuizResultQueueInput>
  }

  export type QuizResultQueueOutboxUpdateWithoutQuizResultQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultQueueOutboxUncheckedUpdateWithoutQuizResultQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultQueueCreateWithoutQuizResultQueueOutboxInput = {
    id?: string
    Quiz: QuizCreateNestedOneWithoutQuizResultQueueInput
  }

  export type QuizResultQueueUncheckedCreateWithoutQuizResultQueueOutboxInput = {
    id?: string
    quizId: string
  }

  export type QuizResultQueueCreateOrConnectWithoutQuizResultQueueOutboxInput = {
    where: QuizResultQueueWhereUniqueInput
    create: XOR<QuizResultQueueCreateWithoutQuizResultQueueOutboxInput, QuizResultQueueUncheckedCreateWithoutQuizResultQueueOutboxInput>
  }

  export type QuizResultQueueUpsertWithoutQuizResultQueueOutboxInput = {
    update: XOR<QuizResultQueueUpdateWithoutQuizResultQueueOutboxInput, QuizResultQueueUncheckedUpdateWithoutQuizResultQueueOutboxInput>
    create: XOR<QuizResultQueueCreateWithoutQuizResultQueueOutboxInput, QuizResultQueueUncheckedCreateWithoutQuizResultQueueOutboxInput>
    where?: QuizResultQueueWhereInput
  }

  export type QuizResultQueueUpdateToOneWithWhereWithoutQuizResultQueueOutboxInput = {
    where?: QuizResultQueueWhereInput
    data: XOR<QuizResultQueueUpdateWithoutQuizResultQueueOutboxInput, QuizResultQueueUncheckedUpdateWithoutQuizResultQueueOutboxInput>
  }

  export type QuizResultQueueUpdateWithoutQuizResultQueueOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    Quiz?: QuizUpdateOneRequiredWithoutQuizResultQueueNestedInput
  }

  export type QuizResultQueueUncheckedUpdateWithoutQuizResultQueueOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCreateWithoutRewardInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultCreateNestedManyWithoutQuizInput
    Question?: QuestionCreateNestedManyWithoutQuizInput
    User: UserCreateNestedOneWithoutQuizInput
    QuizResultQueue?: QuizResultQueueCreateNestedManyWithoutQuizInput
    ScoreDistribution?: ScoreDistributionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutRewardInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantUncheckedCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedManyWithoutQuizInput
    Question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    QuizResultQueue?: QuizResultQueueUncheckedCreateNestedManyWithoutQuizInput
    ScoreDistribution?: ScoreDistributionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutRewardInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutRewardInput, QuizUncheckedCreateWithoutRewardInput>
  }

  export type QuizUpsertWithoutRewardInput = {
    update: XOR<QuizUpdateWithoutRewardInput, QuizUncheckedUpdateWithoutRewardInput>
    create: XOR<QuizCreateWithoutRewardInput, QuizUncheckedCreateWithoutRewardInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutRewardInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutRewardInput, QuizUncheckedUpdateWithoutRewardInput>
  }

  export type QuizUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUpdateManyWithoutQuizNestedInput
    Question?: QuestionUpdateManyWithoutQuizNestedInput
    User?: UserUpdateOneRequiredWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUpdateManyWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUncheckedUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateManyWithoutQuizNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUncheckedUpdateManyWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateWithoutScoreDistributionInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultCreateNestedManyWithoutQuizInput
    Question?: QuestionCreateNestedManyWithoutQuizInput
    User: UserCreateNestedOneWithoutQuizInput
    QuizResultQueue?: QuizResultQueueCreateNestedManyWithoutQuizInput
    Reward?: RewardCreateNestedOneWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutScoreDistributionInput = {
    id?: string
    creatorId: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantUncheckedCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedManyWithoutQuizInput
    Question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    QuizResultQueue?: QuizResultQueueUncheckedCreateNestedManyWithoutQuizInput
    Reward?: RewardUncheckedCreateNestedOneWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutScoreDistributionInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutScoreDistributionInput, QuizUncheckedCreateWithoutScoreDistributionInput>
  }

  export type QuizUpsertWithoutScoreDistributionInput = {
    update: XOR<QuizUpdateWithoutScoreDistributionInput, QuizUncheckedUpdateWithoutScoreDistributionInput>
    create: XOR<QuizCreateWithoutScoreDistributionInput, QuizUncheckedCreateWithoutScoreDistributionInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutScoreDistributionInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutScoreDistributionInput, QuizUncheckedUpdateWithoutScoreDistributionInput>
  }

  export type QuizUpdateWithoutScoreDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUpdateManyWithoutQuizNestedInput
    Question?: QuestionUpdateManyWithoutQuizNestedInput
    User?: UserUpdateOneRequiredWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUpdateManyWithoutQuizNestedInput
    Reward?: RewardUpdateOneWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutScoreDistributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUncheckedUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateManyWithoutQuizNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUncheckedUpdateManyWithoutQuizNestedInput
    Reward?: RewardUncheckedUpdateOneWithoutQuizNestedInput
  }

  export type ParticipantCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Answer?: AnswerCreateNestedManyWithoutParticipantInput
    Quiz: QuizCreateNestedOneWithoutParticipantInput
    ParticipantResult?: ParticipantResultCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    quizId: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
    Answer?: AnswerUncheckedCreateNestedManyWithoutParticipantInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedOneWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type ParticipantCreateManyUserInputEnvelope = {
    data: ParticipantCreateManyUserInput | ParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutUserInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    correctOption: number
    CorrectAnswerPercentage?: number
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
    Quiz: QuizCreateNestedOneWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutUserInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    quizId: string
    correctOption: number
    CorrectAnswerPercentage?: number
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionCreateManyUserInputEnvelope = {
    data: QuestionCreateManyUserInput | QuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultCreateNestedManyWithoutQuizInput
    Question?: QuestionCreateNestedManyWithoutQuizInput
    QuizResultQueue?: QuizResultQueueCreateNestedManyWithoutQuizInput
    Reward?: RewardCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
    Participant?: ParticipantUncheckedCreateNestedManyWithoutQuizInput
    ParticipantResult?: ParticipantResultUncheckedCreateNestedManyWithoutQuizInput
    Question?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    QuizResultQueue?: QuizResultQueueUncheckedCreateNestedManyWithoutQuizInput
    Reward?: RewardUncheckedCreateNestedOneWithoutQuizInput
    ScoreDistribution?: ScoreDistributionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutUserInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutUserInput, QuizUncheckedCreateWithoutUserInput>
  }

  export type QuizCreateManyUserInputEnvelope = {
    data: QuizCreateManyUserInput | QuizCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDiscordCreateWithoutUserInput = {
    id?: string
    discordId: string
    discordUsername: string
    discordDiscriminator: string
    accessToken: string
    refreshToken: string
    connectedAt?: Date | string
  }

  export type UserDiscordUncheckedCreateWithoutUserInput = {
    id?: string
    discordId: string
    discordUsername: string
    discordDiscriminator: string
    accessToken: string
    refreshToken: string
    connectedAt?: Date | string
  }

  export type UserDiscordCreateOrConnectWithoutUserInput = {
    where: UserDiscordWhereUniqueInput
    create: XOR<UserDiscordCreateWithoutUserInput, UserDiscordUncheckedCreateWithoutUserInput>
  }

  export type ParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
  }

  export type QuestionUpdateManyWithWhereWithoutUserInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutUserInput, QuizUncheckedUpdateWithoutUserInput>
    create: XOR<QuizCreateWithoutUserInput, QuizUncheckedCreateWithoutUserInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutUserInput, QuizUncheckedUpdateWithoutUserInput>
  }

  export type QuizUpdateManyWithWhereWithoutUserInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    creatorId?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    status?: EnumQuizStatusFilter<"Quiz"> | $Enums.QuizStatus
    currentQuestionIndex?: IntFilter<"Quiz"> | number
    timePerQuestion?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    maxParticipants?: IntFilter<"Quiz"> | number
    totalParticipants?: IntFilter<"Quiz"> | number
    isResultCalculated?: BoolFilter<"Quiz"> | boolean
    avgScore?: IntFilter<"Quiz"> | number
    lowestScore?: IntFilter<"Quiz"> | number
    resultSentViaMail?: BoolFilter<"Quiz"> | boolean
    startedAt?: DateTimeFilter<"Quiz"> | Date | string
    endedAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type UserDiscordUpsertWithoutUserInput = {
    update: XOR<UserDiscordUpdateWithoutUserInput, UserDiscordUncheckedUpdateWithoutUserInput>
    create: XOR<UserDiscordCreateWithoutUserInput, UserDiscordUncheckedCreateWithoutUserInput>
    where?: UserDiscordWhereInput
  }

  export type UserDiscordUpdateToOneWithWhereWithoutUserInput = {
    where?: UserDiscordWhereInput
    data: XOR<UserDiscordUpdateWithoutUserInput, UserDiscordUncheckedUpdateWithoutUserInput>
  }

  export type UserDiscordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    discordUsername?: StringFieldUpdateOperationsInput | string
    discordDiscriminator?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    discordId?: StringFieldUpdateOperationsInput | string
    discordUsername?: StringFieldUpdateOperationsInput | string
    discordDiscriminator?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserDiscordInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Participant?: ParticipantCreateNestedManyWithoutUserInput
    Question?: QuestionCreateNestedManyWithoutUserInput
    Quiz?: QuizCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserDiscordInput = {
    id?: string
    name: string
    email: string
    password: string
    mailVerified?: boolean
    Participant?: ParticipantUncheckedCreateNestedManyWithoutUserInput
    Question?: QuestionUncheckedCreateNestedManyWithoutUserInput
    Quiz?: QuizUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserDiscordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDiscordInput, UserUncheckedCreateWithoutUserDiscordInput>
  }

  export type UserUpsertWithoutUserDiscordInput = {
    update: XOR<UserUpdateWithoutUserDiscordInput, UserUncheckedUpdateWithoutUserDiscordInput>
    create: XOR<UserCreateWithoutUserDiscordInput, UserUncheckedCreateWithoutUserDiscordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDiscordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDiscordInput, UserUncheckedUpdateWithoutUserDiscordInput>
  }

  export type UserUpdateWithoutUserDiscordInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Participant?: ParticipantUpdateManyWithoutUserNestedInput
    Question?: QuestionUpdateManyWithoutUserNestedInput
    Quiz?: QuizUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserDiscordInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mailVerified?: BoolFieldUpdateOperationsInput | boolean
    Participant?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    Quiz?: QuizUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnswerCreateManyParticipantInput = {
    id?: string
    questionId: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
  }

  export type AnswerUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
    Question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    AnswerOutbox?: AnswerOutboxUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
    AnswerOutbox?: AnswerOutboxUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    participantId: string
    isAnswerCorrect?: boolean | null
    createdAt?: Date | string
    selectedOption: number
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
    Participant?: ParticipantUpdateOneRequiredWithoutAnswerNestedInput
    AnswerOutbox?: AnswerOutboxUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
    AnswerOutbox?: AnswerOutboxUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    isAnswerCorrect?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedOption?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantCreateManyQuizInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
  }

  export type ParticipantResultCreateManyQuizInput = {
    id?: string
    participantId: string
    score: number
    rank: number
    createdAt?: Date | string
  }

  export type QuestionCreateManyQuizInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    creatorId: string
    correctOption: number
    CorrectAnswerPercentage?: number
  }

  export type QuizResultQueueCreateManyQuizInput = {
    id?: string
  }

  export type ScoreDistributionCreateManyQuizInput = {
    id?: string
    count: number
    label: string
  }

  export type ParticipantUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Answer?: AnswerUpdateManyWithoutParticipantNestedInput
    User?: UserUpdateOneRequiredWithoutParticipantNestedInput
    ParticipantResult?: ParticipantResultUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Answer?: AnswerUncheckedUpdateManyWithoutParticipantNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParticipantResultUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateOneRequiredWithoutParticipantResultNestedInput
  }

  export type ParticipantResultUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantResultUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
    User?: UserUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    creatorId?: StringFieldUpdateOperationsInput | string
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    creatorId?: StringFieldUpdateOperationsInput | string
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type QuizResultQueueUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    QuizResultQueueOutbox?: QuizResultQueueOutboxUpdateOneWithoutQuizResultQueueNestedInput
  }

  export type QuizResultQueueUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    QuizResultQueueOutbox?: QuizResultQueueOutboxUncheckedUpdateOneWithoutQuizResultQueueNestedInput
  }

  export type QuizResultQueueUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreDistributionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreDistributionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreDistributionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantCreateManyUserInput = {
    id?: string
    quizId: string
    joinedAt?: Date | string
    isConnected?: boolean
    isBanned?: boolean
  }

  export type QuestionCreateManyUserInput = {
    id?: string
    questionText: string
    questionIndex: number
    options: JsonNullValueInput | InputJsonValue
    quizId: string
    correctOption: number
    CorrectAnswerPercentage?: number
  }

  export type QuizCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.QuizStatus
    currentQuestionIndex: number
    timePerQuestion: number
    createdAt?: Date | string
    maxParticipants?: number
    totalParticipants?: number
    isResultCalculated?: boolean
    avgScore?: number
    lowestScore?: number
    resultSentViaMail?: boolean
    startedAt?: Date | string
    endedAt?: Date | string
  }

  export type ParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Answer?: AnswerUpdateManyWithoutParticipantNestedInput
    Quiz?: QuizUpdateOneRequiredWithoutParticipantNestedInput
    ParticipantResult?: ParticipantResultUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    Answer?: AnswerUncheckedUpdateManyWithoutParticipantNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateOneWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
    Quiz?: QuizUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    quizId?: StringFieldUpdateOperationsInput | string
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    questionIndex?: IntFieldUpdateOperationsInput | number
    options?: JsonNullValueInput | InputJsonValue
    quizId?: StringFieldUpdateOperationsInput | string
    correctOption?: IntFieldUpdateOperationsInput | number
    CorrectAnswerPercentage?: FloatFieldUpdateOperationsInput | number
  }

  export type QuizUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUpdateManyWithoutQuizNestedInput
    Question?: QuestionUpdateManyWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUpdateManyWithoutQuizNestedInput
    Reward?: RewardUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Participant?: ParticipantUncheckedUpdateManyWithoutQuizNestedInput
    ParticipantResult?: ParticipantResultUncheckedUpdateManyWithoutQuizNestedInput
    Question?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    QuizResultQueue?: QuizResultQueueUncheckedUpdateManyWithoutQuizNestedInput
    Reward?: RewardUncheckedUpdateOneWithoutQuizNestedInput
    ScoreDistribution?: ScoreDistributionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuizStatusFieldUpdateOperationsInput | $Enums.QuizStatus
    currentQuestionIndex?: IntFieldUpdateOperationsInput | number
    timePerQuestion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    totalParticipants?: IntFieldUpdateOperationsInput | number
    isResultCalculated?: BoolFieldUpdateOperationsInput | boolean
    avgScore?: IntFieldUpdateOperationsInput | number
    lowestScore?: IntFieldUpdateOperationsInput | number
    resultSentViaMail?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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