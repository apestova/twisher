SELECT USER_ID, USER_NAME FROM USER WHERE USER_ID in (SELECT USER_ID FROM POST group by USER_ID having count(*) > 3)
  
