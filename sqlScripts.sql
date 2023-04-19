create extension if not exists "uuid-ossp";

--create type stat as enum ('OPEN', 'ORDERED');




--create table if not exists carts(
--    id uuid primary key default uuid_generate_v4(),
--    user_id uuid not null,
--    created_at  date not null,
--    updated_at date not null,
--    status stat
--);
--

   
--create table if not exists  cart_items(
--    id uuid,
--    cart_id  uuid,
--    foreign key ("cart_id") references "carts" ("id"),
--    product_id  uuid,
--    count  integer );
--   
   
   

--    insert into carts (user_id,created_at,updated_at,status) values
--    (uuid_generate_v4(),'4/13/2023','4/15/2023','OPEN'),
--    (uuid_generate_v4(),'4/10/2023','4/11/2023','ORDERED'),
--    (uuid_generate_v4(),'4/08/2023','4/10/2023','OPEN'),
--    (uuid_generate_v4(),'4/01/2023','4/02/2023','ORDERED')


--insert into cart_items values
--(uuid_generate_v4(),'0f92eebe-8739-4217-99ed-438111154743',uuid_generate_v4(),10),
--(uuid_generate_v4(),'0f92eebe-8739-4217-99ed-438111154743',uuid_generate_v4(),9),
--(uuid_generate_v4(),'0f92eebe-8739-4217-99ed-438111154743',uuid_generate_v4(),8),
--(uuid_generate_v4(),'0f92eebe-8739-4217-99ed-438111154743',uuid_generate_v4(),7),
--(uuid_generate_v4(),'394b73a1-6c7d-4813-b9e9-715222a35bea',uuid_generate_v4(),10),
--(uuid_generate_v4(),'394b73a1-6c7d-4813-b9e9-715222a35bea',uuid_generate_v4(),9),
--(uuid_generate_v4(),'394b73a1-6c7d-4813-b9e9-715222a35bea',uuid_generate_v4(),8),
--(uuid_generate_v4(),'394b73a1-6c7d-4813-b9e9-715222a35bea',uuid_generate_v4(),7),
--(uuid_generate_v4(),'5cdf5fae-ffd8-488b-90d8-1c1ac35c68c2',uuid_generate_v4(),10),
--(uuid_generate_v4(),'5cdf5fae-ffd8-488b-90d8-1c1ac35c68c2',uuid_generate_v4(),9),
--(uuid_generate_v4(),'5cdf5fae-ffd8-488b-90d8-1c1ac35c68c2',uuid_generate_v4(),8),
--(uuid_generate_v4(),'5cdf5fae-ffd8-488b-90d8-1c1ac35c68c2',uuid_generate_v4(),7)


