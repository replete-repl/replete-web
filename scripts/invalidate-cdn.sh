#!/usr/bin/env bash

set -e

CDN=${CF_DISTRIBUTION_ID:?"Must set CF_DISTRIBUTION_ID"}

JS="/js/compiled*"

ID=$(aws cloudfront create-invalidation --distribution-id ${CDN} --paths ${JS} |
     jq '.Invalidation.Id')

STATE=incomplete

until [[ ${STATE} = "Completed" ]]
do
    STATE=$(aws cloudfront get-invalidation --id ${ID} --distribution-id ${CDN} |
            jq '.Invalidation.Status')

    sleep 1
done
