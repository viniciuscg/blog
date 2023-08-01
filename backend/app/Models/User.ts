import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Comment from './Comment'

export default class User extends BaseModel {
  public static table  = "user"

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public last_name: string

  @column()
  public email: string
  
  @column()
  public password: string

  @column()
  public nickname: string

  @column()
  public bio: string

  @column()
  public profile_pic: string
  
  @column()
  public background_profile: string

  @hasMany(() => Post, {
    foreignKey: "user_id"
  })
  public posts: HasMany<typeof Post>
  
  @hasMany(() => Comment) 
  public comments: HasMany<typeof Comment>
}
