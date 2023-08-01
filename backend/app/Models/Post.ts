import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Comment from './Comment'

export default class Post extends BaseModel {
  public static table  = "post"

  @column({ isPrimary: true })
  public id: number

  @column()
  public text: string

  @column()
  public img: string

  @column({ columnName: "user_id"})
  public user_id: number

  @belongsTo(() => User, {
    foreignKey: "user_id"
  })
  public user: BelongsTo<typeof User>

  @hasMany(() => Comment, {
    foreignKey: "post_id"
  }) 
  public comments: HasMany<typeof Comment>
}
