
```bash
npm install pg

```

Si quieres usar OUT, hay que usar *plpgsql*
```sql
BEGIN
INSERT INTO public.users (firstname, lastname, active)
VALUES (_firstname, _lastname, true)
RETURNING userid INTO new_userid;
END;
```

```sql
DO $$
	DECLARE newid integer;
BEGIN
	CALL public.insert_user('Adams', 'JJ', newid);
	RAISE NOTICE 'new id is %', newid;
END $$
```