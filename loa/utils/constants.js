module.exports = {
  rawQueries: {
    getTeamId: `select "accountTeams"."team_id","accounts"."brd_lock","accounts"."uid" from  "accountTeams" 
      inner join "sites" on  "sites"."team_id"="accountTeams"."team_id" 
      inner join "accounts" on  "sites"."team_id"="accounts"."team_id" 
      where  "sites"."deletedAt" IS  NULL and "sites"."site_id"= ? and "accountTeams"."rcuser_uid"= ?;`
  },
  e164Regex: /^\+?\d{10,14}$/,
  roles: {
    ADMIN: 'Admin'
  }
};
