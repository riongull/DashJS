import {Platform} from "../../Platform";
/**
 * @param {any} [where] - where
 * @param {any} [orderBy] - order by
 * @param {number} [limit] - limit
 * @param {number} [startAt] - start value (included)
 * @param {number} [startAfter] - start value (not included)
 */
declare interface fetchOpts {
    where: any;
    orderBy: any;
    limit: number;
    startAt: number;
    startAfter: number;
}

/**
 * Get documents from the platform
 *
 * @param {Platform} this bound instance class
 * @param {string} typeLocator type locator
 * @param {fetchOpts} opts - MongoDB style query
 * @returns documents
 */
export async function update(this: Platform, typeLocator: string, opts: fetchOpts): Promise<any> {

}

export default update;
