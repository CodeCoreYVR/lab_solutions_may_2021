class AddUsersToNewsArticle < ActiveRecord::Migration[6.0]
  def change
    add_reference :news_articles, :user, null: false, foreign_key: true
  end
end
