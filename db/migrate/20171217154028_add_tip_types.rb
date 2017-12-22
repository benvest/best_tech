class AddTipTypes < ActiveRecord::Migration[5.1]
  def up
    execute "CREATE TABLE categories (
          id uuid not null default uuid_generate_v4(),
          name VARCHAR(250) NOT NULL
          );"

    execute "insert into categories (name) values ('Diet');"
    execute "insert into categories (name) values ('Anesthesia');"
    execute "insert into categories (name) values ('Parasitology');"
    execute "insert into tips (title, description) values ('Chocolate', 'Dont feed the dog chocolate')"
    execute "insert into tips (title, description) values ('Cats', 'Cats are evil')"
    execute "insert into tips (title, description) values ('Dogs', 'Dogs are the best')"
  end

  def down
    execute "drop table if exists categories;"
  end
end
