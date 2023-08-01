import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Post from './Post'

export default class Comment extends BaseModel {
  public static table  = "comment"

  @column({ isPrimary: true })
  public id: number

  @column()
  public text: string

  @column({ columnName: "user_id"})
  public user_id: number
  
  @belongsTo(() => User, {
    foreignKey: "user_id"
  })
  public user: BelongsTo<typeof User>
  
  @column({ columnName: "user_id"})
  public post_id: number
  
  @belongsTo(() => Post, {
    foreignKey: "post_id"
  })
  public post: BelongsTo<typeof Post>
}
